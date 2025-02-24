import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { FileInfo, ClientInfo } from '../types';

const router = express.Router();



// Get client info
router.get('/ws/admin/tac/getClientInfo', (req: Request, res: Response) => {
    const nets = os.networkInterfaces();
    let serverIPv4: string | undefined;
    
    for (const name of Object.keys(nets)) {
        const interfaces = nets[name];
        if (interfaces) {
            for (const net of interfaces) {
                if (net.family === 'IPv4' && !net.internal) {
                    serverIPv4 = net.address;
                }
            }
        }
    }

    const response: ClientInfo = {
        ip: serverIPv4 || 'unknown',
        hostname: 'demo machine',
        canonicalHostname: 'demo machine'
    };
    res.json(response);
});

// Get framework file
router.get('/ws/admin/framework/file', (req: Request, res: Response) => {
    const filepath = req.query.path as string;
    const basePath = path.join(process.cwd(), 'Framework/config/');
    const fullPath = path.join(basePath, filepath);

    try {
        const folderInfo: FileInfo = {
            name: fullPath.split('/').pop() || '',
            lastModified: fs.statSync(fullPath).mtimeMs,
            isFile: false,
            isDirectory: true,
            children: []
        };

        const files = fs.readdirSync(fullPath);
        files.forEach(file => {
            const filePath = path.join(fullPath, file);
            const stats = fs.statSync(filePath);
            folderInfo.children?.push({
                name: file,
                lastModified: stats.mtimeMs,
                isFile: stats.isFile(),
                isDirectory: stats.isDirectory(),
                children: null
            });
        });

        res.json(folderInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error reading directory', details: err instanceof Error ? err.message : 'Unknown error' });
    }
});

// Get StatWin files
router.get('/Framework/config/StatWin/:filepath(*)', (req: Request, res: Response) => {
    const filepath = req.params.filepath;
    const fullPath = path.join(process.cwd(), 'Framework', 'config', 'StatWin', filepath);
    
    try {
        const file = fs.readFileSync(fullPath, 'utf8');
        res.json(JSON.parse(file));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error reading file', details: err instanceof Error ? err.message : 'Unknown error' });
    }
});

// Get PLC software files
router.get('/Framework/config/plcsoftware/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const fullPath = path.join(process.cwd(), 'Framework', 'config', 'plcsoftware', filename);
    
    try {
        const file = fs.readFileSync(fullPath, 'utf8');
        res.json(JSON.parse(file));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error reading file', details: err instanceof Error ? err.message : 'Unknown error' });
    }
});

// Get app config files
router.get('/Framework/config/app/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const fullPath = path.join(process.cwd(), 'Framework', 'config', 'app', filename);
    
    try {
        const file = fs.readFileSync(fullPath, 'utf8');
        res.json(JSON.parse(file));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error reading file', details: err instanceof Error ? err.message : 'Unknown error' });
    }
});

// Get general config files
router.get('/Framework/config/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const fullPath = path.join(process.cwd(), 'Framework', 'config', filename);
    
    try {
        const file = fs.readFileSync(fullPath, 'utf8');
        res.json(JSON.parse(file));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error reading file', details: err instanceof Error ? err.message : 'Unknown error' });
    }
});

export default router; 