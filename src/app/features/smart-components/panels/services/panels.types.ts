import { Observable } from 'rxjs';

/**
 * Контракт, определяющий доступные операции для солнечных панелей.
 * Этот интерфейс позволяет отделить бизнес-логику от реализации.
 */
export interface IPanelService {
    /**
     * Получить все панели.
     */
    getPanels(): Observable<Panel[]>;

    /**
     * Получить сводные данные с панели управления (упрощенная версия).
     */
    getPanelSummaries(): Observable<PanelSummary[]>;

    /**
     * Получить панель по идентификатору.
     * @param id - идентификатор панели
     */
    getPanelById(id: string): Observable<Panel>;

    /**
     * Обновить статус панели.
     * @param id - идентификатор панели
     * @param status - новый статус панели
     */
    updatePanelStatus(id: string, status: PanelStatus): Observable<Panel>;

    /**
     * Получить панели, отфильтрованные по статусу.
     * @param status - статус, по которому фильтруются панели
     */
    getPanelsByStatus(status: PanelStatus): Observable<Panel[]>;
}

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
