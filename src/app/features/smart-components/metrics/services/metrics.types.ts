import { Observable } from 'rxjs';

/**
 * Контракт, определяющий порядок работы с метриками панели мониторинга.
 */
export interface IMetricsService {
    /**
     * Получить основные показателей с панели мониторинга.
     */
    getDashboardMetrics(): Observable<DashboardMetrics>;

    /**
     * Получить активные оповещения.
     */
    getActiveAlerts(): Observable<Alert[]>;

    /**
     * Отметить оповещение как распознанное.
     *
     * @param alertId - id распознанного оповещения
     */
    acknowledgeAlert(alertId: string): Observable<Alert>;

    /**
     * Получить данные об энергопотреблении за определенный период времени.
     *
     * @param startDate - дата начала периодда
     * @param endDate - дата конца периода
     */
    getEnergyData(startDate: Date, endDate: Date): Observable<EnergyData[]>;
}

export interface DashboardMetrics {
    totalPanels: number;
    activePanels: number;
    panelsInMaintenance: number;
    inactivePanels: number;
    totalEnergyProduction: number; // kWh
    averageEfficiency: number; // percent
    co2Saved: number; // tons
    revenueGenerated: number; // USD
    alerts: Alert[];
}

export interface Alert {
    id: string;
    type: AlertType;
    severity: AlertSeverity;
    message: string;
    panelId: string | null;
    createdAt: Date;
    acknowledged: boolean;
}

export type AlertType =
    | 'low_efficiency'
    | 'maintenance_due'
    | 'connection_lost'
    | 'weather_warning'
    | 'production_drop';

export type AlertSeverity = 'info' | 'warning' | 'critical';

export interface EnergyData {
    date: Date;
    production: number;
    consumption: number;
    netEnergy: number;
}
