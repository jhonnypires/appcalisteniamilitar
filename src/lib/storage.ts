import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'analytics.json');

export interface TrackingEvent {
    sessionId: string;
    stepId: string;
    action: string;
    timestamp: string;
    metadata?: any;
}

// Ensure data directory exists
function ensureDataDir() {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export function saveEvent(event: TrackingEvent) {
    ensureDataDir();

    let data: TrackingEvent[] = [];

    if (fs.existsSync(DATA_FILE)) {
        try {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
            data = JSON.parse(fileContent);
        } catch (e) {
            console.error("Error reading analytics file", e);
            data = [];
        }
    }

    data.push(event);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export function getEvents(): TrackingEvent[] {
    if (!fs.existsSync(DATA_FILE)) return [];
    try {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(fileContent);
    } catch (e) {
        return [];
    }
}
