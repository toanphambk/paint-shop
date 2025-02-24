import WebSocket from 'ws';
import { OPCUAClientService } from '../opcua/OPCUAClient';
import { SocketClientHandler } from './SocketClientHandler';
import { v4 as uuidv4 } from 'uuid';

export class PLCWebSocketServer {
    private wss: WebSocket.Server;
    private opcuaService: OPCUAClientService;
    private clients: Map<string, SocketClientHandler> = new Map();

    constructor(private port: number) {
        this.opcuaService = OPCUAClientService.getInstance();
        this.wss = new WebSocket.Server({ port });
        this.setupServerHandlers();
    }

    private setupServerHandlers() {
        this.wss.on('connection', (ws: WebSocket) => {
            const clientId = uuidv4();
            const client = new SocketClientHandler(ws, clientId, clientId);
            this.clients.set(clientId, client);
            
            console.log(`New client connected: ${clientId}`);                
        });
    }


    public async stop(): Promise<void> {
        // Close all client connections
        this.clients.forEach(client => {
            client.close();
        });
        this.clients.clear();

        // Stop the OPC UA service and WebSocket server
        await this.opcuaService.stop();
        this.wss.close();
    }
}