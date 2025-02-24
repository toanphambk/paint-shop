import { Config } from '../types';

const config: Config = {
    http: {
        port: 3000
    },
    websocket: {
        port: 8080,
        path: '/ws/emosweb'
    },
    static: {
        directory: 'Framework'
    },
    opcua: {
        endpoint: "opc.tcp://10.68.14.1:4840",
        settings: {
            applicationName: "Paint Shop OPC UA Client",
            connectionStrategy: {
                initialDelay: 1000,
                maxRetry: 3
            },
            securityMode: "None",
            securityPolicy: "None",
            endpointMustExist: false
        },
        subscription: {
            requestedPublishingInterval: 500,
            requestedLifetimeCount: 1000,
            requestedMaxKeepAliveCount: 20,
            maxNotificationsPerPublish: 10,
            publishingEnabled: true,
            priority: 10
        },
        monitoring: {
            samplingInterval: 100,
            discardOldest: true,
            queueSize: 10
        }
    }
};

export default config; 