import {
    OPCUAClient,
    MessageSecurityMode,
    SecurityPolicy,
    AttributeIds,
    ClientSubscription,
    ClientMonitoredItem,
    TimestampsToReturn,
    DataValue,
    ClientSession,
    DataType,
    Variant
} from "node-opcua";
import { EventEmitter } from 'events';
import config from '../config/config';
import { TagChangePayload } from "../types";

/**
 * Represents a record of a subscribed PLC tag
 * @interface TagRecord
 */
interface TagRecord {
    /** Full OPC UA node ID (e.g., 'ns=3;s="DB"."Path.To.Tag"') */
    nodeId: string;
    /** Original client tag format (e.g., 'DB.Path.To.Tag') */
    clientTag: string;
    /** Current value of the tag */
    value: Variant;
    /** Last update timestamp */
    timestamp: Date | null;
    /** Status of the tag (e.g., 'Good', 'Bad') */
    quality: number;
    /** OPC UA monitored item instance */
    monitoredItem?: ClientMonitoredItem;
    subscription?: ClientSubscription;
}

/**
 * Represents the value and metadata of a PLC tag
 * @interface TagValue
 */
interface TagValue {
    /** Current value of the tag */
    value: any;
    /** Last update timestamp */
    timestamp: Date | null;
    /** Status of the tag (e.g., 'Good', 'Bad') */
    quality: number;
}

/**
 * OPC UA Client Service for handling PLC tag subscriptions
 * This class implements a singleton pattern and manages connections to an OPC UA server.
 */
export class OPCUAClientService extends EventEmitter {
    private static instance: OPCUAClientService;
    private client: OPCUAClient;
    private session: ClientSession | null = null;
    private mainSubscription: ClientSubscription | null = null;
    private tags: Map<string, TagRecord> = new Map();
    private connected: boolean = false;
    private connectionPromise: Promise<void> | null = null;
    private isInitialized: boolean = false;

    private constructor() {
        super();

        // Create OPC UA client with proper configuration
        this.client = OPCUAClient.create({
            applicationName: config.opcua.settings.applicationName,
            connectionStrategy: {
                initialDelay: 1000,
                maxRetry: 3
            },
            securityMode: MessageSecurityMode.None,
            securityPolicy: SecurityPolicy.None,
            endpointMustExist: false
        });

        this.handleTagChange = this.handleTagChange.bind(this);
    }

    /**
     * Gets the singleton instance of OPCUAClientService
     */
    public static getInstance(): OPCUAClientService {
        if (!OPCUAClientService.instance) {
            OPCUAClientService.instance = new OPCUAClientService();
        }
        return OPCUAClientService.instance;
    }

    /**
     * Initializes the OPC UA service and establishes connection
     */
    public async initialize(): Promise<void> {
        if (this.isInitialized) {
            return;
        }

        try {
            await this.ensureConnected();
            this.isInitialized = true;
            console.log('OPC UA Service initialized successfully');
        } catch (error) {
            console.error('Failed to initialize OPC UA Service:', error);
            throw error;
        }
    }

    /**
     * Converts a client tag format to OPC UA node ID format
     * @param clientTag - Tag in client format (e.g., 'DB.Path.To.Tag')
     * @returns OPC UA node ID (e.g., 'ns=3;s="DB"."Path.To.Tag"')
     * @private
     */
    private convertToOPCUANodeId(clientTag: string): string {
        // Handle both formats: already in nodeId format or needing conversion
        if (clientTag.startsWith('ns=')) {
            return clientTag;
        }

        // Remove any leading dots and trim
        clientTag = clientTag.replace(/^\.+/, '').trim();

        // Split by dots and process each part
        const parts = clientTag.split('.');
        const quotedParts = parts.map(part => {
            // Check if part contains array index
            const match = part.match(/^(.+?)(\[\d+\])$/);
            if (match) {
                // If it has array index, only quote the name part
                return `"${match[1]}"${match[2]}`;
            }
            // If no array index, quote the entire part
            return `"${part}"`;
        });

        // Join with dots
        const processedTag = quotedParts.join('.');

        return `ns=3;s=${processedTag}`;
    }

    /**
     * Converts an OPC UA node ID to client tag format
     * @param nodeId - OPC UA node ID (e.g., 'ns=3;s="DB"."Path.To.Tag"')
     * @returns Tag in client format (e.g., 'DB.Path.To.Tag')
     * @private
     */
    private convertToClientTag(nodeId: string): string {
        // Extract the quoted parts from nodeId format: ns=3;s="part1"."part2"."part3"
        const match = nodeId.match(/ns=3;s=(.+)/);
        if (!match) return nodeId; // Return original if no match

        // Get the tag part and remove outer quotes if they exist
        const tagPart = match[1].trim();

        // Split by dots and remove quotes from each part
        const parts = tagPart.split('.')
            .map(part => part.replace(/^"(.+)"$/, '$1'));

        return parts.join('.');
    }

    /**
     * Ensures connection to OPC UA server is established
     * @returns Promise that resolves when connected
     */
    public async ensureConnected(): Promise<void> {
        if (this.connected && this.session) {
            return;
        }

        if (this.connectionPromise) {
            return this.connectionPromise;
        }

        this.connectionPromise = this.connect();
        return this.connectionPromise;
    }

    /**
     * Establishes connection to OPC UA server
     * @returns Promise that resolves when connected
     * @private
     * @throws Error if connection fails
     */
    private async connect(): Promise<void> {
        try {
            await this.client.connect(config.opcua.endpoint);
            this.session = await this.client.createSession();

            // Create main subscription with proper parameters
            this.mainSubscription = ClientSubscription.create(this.session, {
                requestedPublishingInterval: 500,
                requestedLifetimeCount: 1000,
                requestedMaxKeepAliveCount: 20,
                maxNotificationsPerPublish: 10,
                publishingEnabled: true,
                priority: 10
            });

            this.mainSubscription.on("started", () => {
                console.log(
                    "Subscription started, id:", this.mainSubscription?.subscriptionId,
                    "Publishing interval:", this.mainSubscription?.publishingInterval
                );
            });

            this.mainSubscription.on("terminated", () => {
                console.log("Subscription terminated");
                this.emit('subscription_terminated');
            });

            this.connected = true;
            this.emit('connected');
        } catch (error) {
            this.connected = false;
            this.emit('error', error);
            throw error;
        }
    }

    /**
     * Handles tag value changes from OPC UA server
     * @param nodeId - OPC UA node ID of the changed tag
     * @param dataValue - New value and metadata
     * @private
     */
    private handleTagChange(nodeId: string, dataValue: DataValue) {
        const tagRecord = this.tags.get(nodeId);
        const {value, serverTimestamp, statusCode} = dataValue;
        if (!tagRecord) return;

        // Update record with proper value handling
        tagRecord.value = value;
        tagRecord.timestamp = serverTimestamp;
        tagRecord.quality = statusCode.isGood() ? 192 : 0;
        const payload: TagChangePayload = {
            tag: tagRecord.clientTag,
            value: tagRecord.value,
            timestamp: tagRecord.timestamp,
            quality: tagRecord.quality
        }

        // Emit change event with all necessary data
        this.emit('tag_changed', payload);
    }

    /**
     * Reads a tag value from the tag record or initializes it if not exists
     * @param clientTag - Tag in client format (e.g., 'DB.Path.To.Tag')
     * @returns Promise that resolves with the tag value
     * @throws Error if not connected to server or tag read fails
     * 
     * @example
     * ```typescript
     * // Read a tag value
     * const value = await client.readTagValue('DB1.Station1.Temperature');
     * console.log(`Current value: ${value.value}`);
     * ```
     */
    public async readTagValue(clientTag: string): Promise<TagValue> {
        await this.ensureConnected();
        if (!this.session) {
            throw new Error("Not connected to OPC UA server");
        }

        const nodeId = this.convertToOPCUANodeId(clientTag);
        let tagRecord = this.tags.get(nodeId);

        // If tag doesn't exist in records, read it from PLC
        if (!tagRecord) {
            const dataValue = await this.session.read({
                nodeId: nodeId,
                attributeId: AttributeIds.Value

            });

            tagRecord = {
                nodeId,
                clientTag,
                value: dataValue.value,
                timestamp: dataValue.serverTimestamp,
                quality: dataValue.statusCode.isGood() ? 192 : 0,
            };

            this.tags.set(nodeId, tagRecord);
        }

        return {
            value: tagRecord.value,
            timestamp: tagRecord.timestamp,
            quality: tagRecord.quality
        };
    }

    /**
     * Gets the data type of a node from the server
     * @param nodeId - OPC UA node ID
     * @returns Promise that resolves with the DataType
     * @private
     */
    private async getNodeDataType(nodeId: string): Promise<DataType> {
        if (!this.session) {
            throw new Error("Not connected to OPC UA server");
        }

        try {
            // Get the actual data type from the node's value
            const dataValue = await this.session.read({
                nodeId: nodeId,
                attributeId: AttributeIds.DataType
            });

            // Return the data type from the variant
            return dataValue.value.dataType;
        } catch (error) {
            console.error(`Error getting data type for node ${nodeId}:`, error);
            throw error;
        }
    }

    /**
     * Parses a value according to the target OPC UA data type
     * @param value - The value to parse
     * @param targetDataType - The target OPC UA data type
     * @returns The parsed value
     * @private
     */
    private parseValueForDataType(value: any, targetDataType: DataType): any {
        if (value === null || value === undefined) {
            return value;
        }

        switch (targetDataType) {
            case DataType.Boolean:
                return this.parseBooleanValue(value);
            // Add other data type cases here as needed
            default:
                return value;
        }
    }

    /**
     * Parses a value to boolean according to specific rules
     * @param value - The value to parse to boolean
     * @returns The parsed boolean value
     * @private
     */
    private parseBooleanValue(value: any): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            // Handle string number case
            const numValue = parseInt(value);
            if (!isNaN(numValue)) {
                return numValue !== 0;
            }
            // Handle 'true'/'false' strings
            return value.toLowerCase() === 'true';
        }
        if (typeof value === 'number') {
            return value !== 0;
        }
        return Boolean(value);
    }

    /**
     * Writes a value to a PLC tag with proper data type handling
     * @param clientTag - Tag in client format
     * @param value - Value to write
     * @throws Error if not connected or write fails
     */
    public async writeTagValue(clientTag: string, value: any): Promise<void> {
        await this.ensureConnected();
        if (!this.session) {
            throw new Error("Not connected to OPC UA server");
        }

        const nodeId = this.convertToOPCUANodeId(clientTag);
        let tagRecord = this.tags.get(nodeId);

        if (!tagRecord) {
            // If tag not in cache, get its data type first
            const tagValue = await this.readTagValue(clientTag);
            tagRecord = {
                nodeId,
                clientTag,
                value: tagValue.value,
                timestamp: tagValue.timestamp,
                quality: tagValue.quality,
            };
            this.tags.set(nodeId, tagRecord);
        }

        try {

            const processedValue = this.parseValueForDataType(value, tagRecord.value.dataType);

            await this.session.write({
                nodeId: nodeId,
                attributeId: AttributeIds.Value,
                value: new DataValue({
                    value: new Variant({
                        dataType: tagRecord.value.dataType,
                        value: processedValue
                    })
                })
            });
        } catch (error) {
            console.error(`Error writing to tag ${clientTag}:`, error);
        }
    }

    /**
     * Subscribes to a tag and returns its current value
     * @param clientTag - Tag in client format (e.g., 'DB.Path.To.Tag')
     * @returns Promise that resolves with the tag value
     * @throws Error if subscription fails
     */
    public async subscribeToTag(clientTag: string): Promise<TagRecord> {
        await this.ensureConnected();
        if (!this.session || !this.mainSubscription) {
            throw new Error("Not connected to OPC UA server");
        }

        const nodeId = this.convertToOPCUANodeId(clientTag);
        let tagRecord = this.tags.get(nodeId);
        console.log(`Subscribing to tag: ${clientTag} with nodeId: ${nodeId}`);

        if (tagRecord && tagRecord.monitoredItem) {
            return tagRecord;
        }

        // If tag doesn't exist or doesn't have a monitored item, create one
        if (!tagRecord || !tagRecord.monitoredItem) {
            // First read the current value and get data type
            const [dataValue, dataType] = await Promise.all([
                this.session.read({
                    nodeId: nodeId,
                    attributeId: AttributeIds.Value
                }),
                this.getNodeDataType(nodeId)
            ]);

            // Create or update tag record
            tagRecord = {
                nodeId,
                clientTag,
                value: dataValue.value.value,
                timestamp: dataValue.serverTimestamp,
                quality: dataValue.statusCode.isGood() ? 192 : 0,
                subscription: this.mainSubscription
            };

            // Create monitored item
            const monitoredItem = ClientMonitoredItem.create(
                this.mainSubscription,
                {
                    nodeId: nodeId,
                    attributeId: AttributeIds.Value
                },
                {
                    discardOldest: true,
                    queueSize: 10
                },
                TimestampsToReturn.Both
            );

            monitoredItem.on("changed", (dataValue: DataValue) => {
                this.handleTagChange(nodeId, dataValue);
            });

            tagRecord.monitoredItem = monitoredItem;
            this.tags.set(nodeId, tagRecord);
        }

        return tagRecord;
    }

    /**
     * Unsubscribes from a tag
     * @param clientTag - Tag in client format (e.g., 'DB.Path.To.Tag')
     */
    public async unsubscribeFromTag(clientTag: string): Promise<void> {
        const nodeId = this.convertToOPCUANodeId(clientTag);
        const tagRecord = this.tags.get(nodeId);

        if (tagRecord?.monitoredItem) {
            await tagRecord.monitoredItem.terminate();
            this.tags.delete(nodeId);
        }
    }

    /**
     * Gets the current value from tag record in client format.
     * If tag is not found in records, automatically subscribes to it first.
     * @param clientTag - Tag in client format (e.g., 'DB.Path.To.Tag')
     * @returns Promise with current value and metadata from tag record
     * 
     * @example
     * ```typescript
     * // Get value from tag record (auto-subscribes if needed)
     * const value = await client.getTagValue('DB1.Station1.Temperature');
     * console.log(`Value: ${value.value}, Status: ${value.status}`);
     * ```
     */
    public async getTagValue(clientTag: string): Promise<TagValue> {
        const nodeId = this.convertToOPCUANodeId(clientTag);
        let tagRecord = this.tags.get(nodeId);

        // If tag not found, subscribe to it first
        if (!tagRecord) {
           tagRecord = await this.subscribeToTag(clientTag);
        }   

        return {
            value: tagRecord.value ? tagRecord.value.value ? tagRecord.value.value.toString() : "" : "",
            timestamp: tagRecord.timestamp,
            quality: tagRecord.quality
        };
    }

    /**
     * Gets list of currently subscribed tags
     * @returns Array of tags in client format
     */
    public getSubscribedTags(): string[] {
        return Array.from(this.tags.values()).map(record => record.clientTag);
    }

    /**
     * Disconnects from OPC UA server and cleans up resources
     * @returns Promise that resolves when disconnected
     */
    public async disconnect(): Promise<void> {
        // Terminate all subscriptions
        for (const [nodeId, tagRecord] of this.tags) {
            if (tagRecord.monitoredItem) {
                tagRecord.monitoredItem.terminate();
            }
        }
        this.tags.clear();

        if (this.mainSubscription) {
            await this.mainSubscription.terminate();
            this.mainSubscription = null;
        }

        if (this.session) {
            await this.session.close();
            this.session = null;
        }

        await this.client.disconnect();
        this.connected = false;
        this.connectionPromise = null;
    }

    /**
     * Stops the OPC UA service and cleans up resources
     */
    public async stop(): Promise<void> {
        if (!this.isInitialized) {
            return;
        }

        try {
            await this.disconnect();
            this.isInitialized = false;
            console.log('OPC UA Service stopped successfully');
        } catch (error) {
            console.error('Error stopping OPC UA Service:', error);
            throw error;
        }
    }
}

export { TagValue, TagRecord }; 