import WebSocket from 'ws';
import { wsDatachangeMsg, wsMessage, wsMessageType, wsAdviseMessage, TagChangePayload } from '../types';
import { TagTable } from '../types';
import { OPCUAClientService, TagRecord, TagValue } from '../opcua/OPCUAClient';

export class SocketClientHandler {
    private tagTable: TagTable;
    private ws: WebSocket;
    private ip: string;
    private id: string;
    private opcuaService: OPCUAClientService;

    constructor(ws: WebSocket, ip: string, id: string) {
        this.ws = ws;
        this.ip = ip;
        this.id = id;
        this.tagTable = {};
        this.opcuaService = OPCUAClientService.getInstance();
        this.opcuaService.on('tag_changed', this.handleDataChange.bind(this));
        this.socketHandler();
    }

    public getIP(): string {
        return this.ip;
    }

    public getWebSocket = (): WebSocket => {
        return this.ws;
    }

    public isConnected = (): boolean => {
        return this.ws.readyState === WebSocket.OPEN;
    }

    public socketHandler = (): void => {
        this.ws.on('message', (message) => {
            this.handleMessage(JSON.parse(message.toString()));
        });

        this.ws.on('close', () => {
            console.log(`Client disconnected: ${this.ip}`);
        });
    }

    public handleMessage = (message: wsMessage): void => {
        const handlerMap: Record<wsMessageType, (message: wsMessage) => void> = {
            info: (message: wsMessage) => {
                console.log(`Info message received from client (${this.ip}):`, message);
            },
            advise: this.handleAdviseMessage,
            poke: this.handlePokeMessage
        };

        const handler = handlerMap[message.type];
        if (handler) {
            handler(message);
        } else {
            console.log(message);
            console.log(`Unhandled message type: ${message.type} from client (${this.ip})`);
        }
    }

    private handleAdviseMessage = async (message: wsMessage): Promise<void> => {
        const tag = message.tag;
        try {
            this.addTag(message as wsAdviseMessage);
            const tagRecord = await this.opcuaService.subscribeToTag(tag);
            const {timestamp, value, quality} = await this.opcuaService.getTagValue(tag);
            const response: wsDatachangeMsg = {
            type: "dataChange",
                id: message.id,
                tag,
                ts: timestamp ? timestamp.toISOString() : new Date().toISOString(),
                value: value,
                quality,
                source: message.plc,
            };

            this.sendMessage(response);
        } catch (error) {
            console.error(`Error subscribing to tag: ${tag}`, error);
        }
    }


    private addTag = (message: wsAdviseMessage): void => {
        const { plc, id, tag } = message;

        if (!this.tagTable[tag]) {
            this.tagTable[tag] = {
                id,
                plc,
                tag
            };
        }
    }

    public handleDataChange = async (payload: TagChangePayload): Promise<void> => {
        const { tag, value, quality, timestamp } = payload;
        if (!tag || value === undefined || quality === undefined || timestamp === undefined) {
            console.log(`Invalid payload: ${JSON.stringify(payload, null, 2)} for client: ${this.ip}`);
            return;
        }

        const tagData = this.tagTable[tag];

        if (!tagData) {
            return;
        }

        const { id, plc } = tagData;
        const response: wsDatachangeMsg = {
            id: id,
            type: "dataChange",
            tag: tag,
            ts: timestamp?.toISOString() || new Date().toISOString(),
            value: value.value.toString(),
            quality,
            source: plc,
        };
        this.sendMessage(response);
    }

    private handlePokeMessage = (message: wsMessage): void => {
        const { tag, value } = message;
        console.log(`Poke message received from client (${this.ip}):`, message);
        this.opcuaService.writeTagValue(tag, value);
    }

    public sendMessage = (message: wsMessage | wsDatachangeMsg): void => {
        if (this.isConnected()) {
            this.ws.send(JSON.stringify(message));
        }
    }

    public close = (): void => {
        this.ws.close();
    }
} 