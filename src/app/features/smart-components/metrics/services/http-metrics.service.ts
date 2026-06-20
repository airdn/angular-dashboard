import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
    Alert,
    DashboardMetrics,
    EnergyData,
    IMetricsService
} from '@features/smart-components/metrics/services/metrics.types';

/**
 * Работа сервиса метрик.
 * Отправляет реальные HTTP-запросы к бэкенду.
 *
 * Отвечает на вопрос "Откуда брать данные?"
 */
@Injectable({
    providedIn: 'root'
})
export class HttpMetricsService implements IMetricsService {
    private httpClient = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api'; // или из environment

    public getDashboardMetrics(): Observable<DashboardMetrics> {
        return this.httpClient.get<DashboardMetrics>(`${this.apiUrl}/metrics/dashboard`);
    }

    public getActiveAlerts(): Observable<Alert[]> {
        return this.httpClient.get<Alert[]>(`${this.apiUrl}/alerts/active`);
    }

    public acknowledgeAlert(alertId: string): Observable<Alert> {
        return this.httpClient.patch<Alert>(`${this.apiUrl}/alerts/${alertId}/acknowledge`, {});
    }

    public getEnergyData(startDate: Date, endDate: Date): Observable<EnergyData[]> {
        return this.httpClient.get<EnergyData[]>(`${this.apiUrl}/energy-data`, {
            params: { start: startDate.toISOString(), end: endDate.toISOString() }
        });
    }
}
