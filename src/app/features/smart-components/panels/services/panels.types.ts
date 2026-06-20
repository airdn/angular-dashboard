export interface Panel {
    id: string;
    name: string;
    location: PanelLocation;
    status: PanelStatus;
    currentProduction: number;
    estimatedProduction: number;
    efficiency: number;
    installationDate: Date;
    lastMaintenance: Date | null;
}

export interface PanelLocation {
    address: string;
    city: string;
    region: string;
    coordinates: Coordinates;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export type PanelStatus = 'active' | 'maintenance' | 'inactive' | 'warning';

export interface PanelSummary {
    id: string;
    name: string;
    status: PanelStatus;
    currentProduction: number;
    city: string;
}
