import {
    OPCUAClient,
    MessageSecurityMode,
    SecurityPolicy,
    AttributeIds,
    ClientSubscription,
    ClientMonitoredItem,
    TimestampsToReturn,
    DataValue,
    DataType,
    Variant,
    NumericRange
} from "node-opcua";

// Function to create a subscription for a PLC tag
async function subscribeToPLCTag(session: any, tagNodeId: string) {
    console.log(`\nSetting up subscription for tag: ${tagNodeId}`);
    
    // Create the subscription
    const subscription = ClientSubscription.create(session, {
        requestedPublishingInterval: 500,  // Update every 500ms
        requestedLifetimeCount: 1000,      // Keep subscription alive longer
        requestedMaxKeepAliveCount: 20,    // Send keepalive every 20 intervals
        maxNotificationsPerPublish: 10,    // Max number of notifications per publish
        publishingEnabled: true,
        
        priority: 10
    });

    subscription.on("started", () => {
        console.log(
            "Subscription started, id:", subscription.subscriptionId,
            "\nPublishing interval:", subscription.publishingInterval
        );
    });

    subscription.on("keepalive", () => {
        console.log("Subscription keepalive");
    });

    subscription.on("terminated", () => {
        console.log("Subscription terminated");
    });

    // Create monitored item
    const itemToMonitor = {
        nodeId: tagNodeId,
        attributeId: AttributeIds.Value
    };

    const parameters = {
        samplingInterval: 500,    // Sample every 100ms
        discardOldest: true,     // Discard oldest values if queue is full
        queueSize: 10            // Queue size for values
    };

    const monitoredItem = ClientMonitoredItem.create(
        subscription,
        itemToMonitor,
        parameters,
        TimestampsToReturn.Both
    );

    monitoredItem.on("changed", (dataValue: DataValue) => {
        console.log(new Date().toISOString(), {
            value: dataValue.value.value,
            timestamp: dataValue.serverTimestamp,
            status: dataValue.statusCode.toString()
        });
    });

    return { subscription, monitoredItem };
}

// Function to write a value to a PLC tag
async function writeToPLCTag(session: any, tagNodeId: string, value: any) {
    console.log(`\nWriting value ${value} to tag: ${tagNodeId}`);
    try {
        await session.write({
            nodeId: tagNodeId,
            attributeId: AttributeIds.Value,
            value: new DataValue({
                value: new Variant({
                    dataType: DataType.Boolean,
                    value: value
                })
            })
        });
        console.log("Write successful!");
    } catch (err) {
        console.error("Error writing to tag:", err);
        throw err;
    }
}

async function testOpcuaConnection() {
    const connectionStrategy = {
        initialDelay: 1000,
        maxRetry: 3
    };

    const client = OPCUAClient.create({
        applicationName: "Paint Shop Test Client",
        connectionStrategy,
        securityMode: MessageSecurityMode.None,
        securityPolicy: SecurityPolicy.None,
        endpointMustExist: false
    });

    try {
        // Step 1: Connect to the server
        const endpointUrl = "opc.tcp://10.68.14.1:4840";
        console.log("Attempting to connect to:", endpointUrl);
        
        await client.connect(endpointUrl);
        console.log("Connected to server!");

        // Step 2: Create session
        const session = await client.createSession();
        console.log("Session created successfully");

        // Step 3: Read namespace array
        const namespaces = await session.readNamespaceArray();
        console.log("\nAvailable namespaces:");
        namespaces.forEach((ns, index) => {
            console.log(`[${index}] ${ns}`);
        });
        

        // Step 4: Try reading the structure step by step
        // const baseNodeId = `ns=3;s="zFlags_Logic005"`;
        // console.log(`\nTrying to read base node: ${baseNodeId}`);
        
        try {
            // const baseValue = await session.read({
            //     nodeId: baseNodeId,
            //     attributeId: AttributeIds.Value
            // });
            // console.log("\nBase node value:", {
            //     value: baseValue.value.value,
            //     dataType: baseValue.value.dataType,
            //     status: baseValue.statusCode.toString()
            // });

            // Try reading Model property
            const modelNodeId = `ns=3;s="zFlags_Logic005"."Model"[10]."SetQuant"`;
            console.log(`\nTrying to read Model node: ${modelNodeId}`);
            const modelValue = await session.read({
                nodeId: modelNodeId,
                attributeId: AttributeIds.Value
            });
            console.log("\nModel node value:", {
                value: modelValue.value.value,
                dataType: modelValue.value.dataType,
                status: modelValue.statusCode.toString()
            });

            // Try reading BodyType from Model[0]
            const bodyTypeNodeId = `ns=3;s="zFlags_Logic005"."Model"[9]."SetQuant"`;
            console.log(`\nTrying to read BodyType node: ${bodyTypeNodeId}`);
            const bodyTypeValue = await session.read({
                nodeId: bodyTypeNodeId,
                attributeId: AttributeIds.Value
            });
            console.log("\nBodyType value:", {
                value: bodyTypeValue.value.value,
                dataType: bodyTypeValue.value.dataType,
                status: bodyTypeValue.statusCode.toString(),
                type: bodyTypeValue.value.dataType
            });

            // Set up subscription for BodyType
            console.log(`\nSetting up subscription for BodyType: ${bodyTypeNodeId}`);
            const { subscription, monitoredItem } = await subscribeToPLCTag(session, bodyTypeNodeId);

            // Keep the connection alive for a while to receive updates
            await new Promise(resolve => setTimeout(resolve, 300000)); // Run for 5 minutes

            // Clean up subscription
            await subscription.terminate();
        } catch (err) {
            console.error("Error reading nodes:", err);
        }

        // Step 5: Clean up and exit
        await session.close();
        await client.disconnect();
        console.log("\nDisconnected from server");
        return true;

    } catch (err) {
        console.error("An error occurred:", err);
        if (client) {
            console.log("Forcing client disconnection...");
            await client.disconnect();
        }
        return false;
    }
}

// Run the test
if (require.main === module) {
    console.log("Starting OPC UA subscription test...");
    testOpcuaConnection()
        .then(success => {
            if (success === false) {
                console.log("Test failed!");
                process.exit(1);
            }
        })
        .catch(err => {
            console.error("Test failed with error:", err);
            process.exit(1);
        });
}

export { testOpcuaConnection, subscribeToPLCTag, writeToPLCTag }; 