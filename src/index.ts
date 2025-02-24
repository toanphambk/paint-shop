import express from 'express';
import cors from 'cors';
import { PLCWebSocketServer } from './websocket/websocketServer';
import { OPCUAClientService } from './opcua/OPCUAClient';
import config from './config/config';
import apiRoutes from './routes/api';
import path from 'path';
// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '..', config.static.directory)));

// Service ports
const WS_PORT = config.websocket.port;
const HTTP_PORT = config.http.port;

async function main() {
    try {
        // Initialize OPC UA Service
        const opcuaService = OPCUAClientService.getInstance();
        await opcuaService.initialize();
        console.log(`Connected to OPC UA server at ${config.opcua.endpoint}`);

        // Initialize WebSocket server
        const wsServer = new PLCWebSocketServer(WS_PORT);
        console.log(`WebSocket server running on port ${WS_PORT}`);

        // Start HTTP server
        app.listen(HTTP_PORT, () => {
            console.log(`HTTP server running on port ${HTTP_PORT}`);
        });

        // Handle application shutdown
        const shutdown = async () => {
            console.log('\nShutting down...');
            await wsServer.stop();
            await opcuaService.stop();
            process.exit(0);
        };

        process.on('SIGINT', shutdown);
        process.on('SIGTERM', shutdown);

    } catch (error) {
        console.error('Failed to start services:', error);
        process.exit(1);
    }
}

main().catch(console.error); 