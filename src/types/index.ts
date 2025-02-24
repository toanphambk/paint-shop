import { Variant } from "node-opcua-variant";

export interface FileInfo {
    name: string;
    lastModified: number;
    isFile: boolean;
    isDirectory: boolean;
    children: FileInfo[] | null;
}

export interface ClientInfo {
    ip: string;
    hostname: string;
    canonicalHostname: string;
}

export type wsMessageType = "info" | "advise" | "poke";

export type wsResponseType = "dataChange"

export type wsMessage = {
    type: wsMessageType;
    [key: string]: any;
}

export type wsAdviseMessage = wsMessage & {
    id: number;
    plc: string;
    tag: string;
}

export type wsResponse = {
    type: wsResponseType;
    [key: string]: any;
}

export interface Config {
    http: {
        port: number;
    };
    websocket: {
        port: number;
        path: string;
    };
    static: {
        directory: string;
    };
    opcua: {
        endpoint: string;
        settings: {
            applicationName: string;
            connectionStrategy: {
                initialDelay: number;
                maxRetry: number;
            };
            securityMode: string;
            securityPolicy: string;
            endpointMustExist: boolean;
        };
        subscription: {
            requestedPublishingInterval: number;
            requestedLifetimeCount: number;
            requestedMaxKeepAliveCount: number;
            maxNotificationsPerPublish: number;
            publishingEnabled: boolean;
            priority: number;
        };
        monitoring: {
            samplingInterval: number;
            discardOldest: boolean;
            queueSize: number;
        };
    };
}

export type ClassStateRec = {
    ClassStateNew: string;
    ClassStateAck: string;
    state?: number; // Computed later based on the binary values
}



export type wsDatachangeMsg = wsResponse & {
    type: wsResponseType      // The event type
    id: number;              // Unique identifier for the tag
    tag: string;             // Full tag name
    ts: number | string;     // Timestamp (number or string)
    value: string;           // The current value as a string
    quality: number;         // Quality indicator (e.g., 192 for good quality)
    source: string;          // Source of the data (e.g., "IndexedDB" or direct from server)
    classStateRec?: ClassStateRec; // Optional object for alarm/diagnosis details
    // Optional computed properties added after processing:
    newFault?: boolean;
    newWarning?: boolean;
    newEmergency?: boolean;
    ackFault?: boolean;
    ackWarning?: boolean;
    ackEmergency?: boolean;
    noFault?: boolean;
}

export type TagTable = {
    // key is the tag in client format (e.g., 'DB.Path.To.Tag')
    [key: string]: {
        id: number;
        plc: string;
        tag: string;
    };  
}

export type TagInfo = {
    id: number;
    plc: string;
    tag: string;
}

export type TagChangePayload = {
    tag: string;
    value: Variant;
    quality: number;
    timestamp: Date | null;
}