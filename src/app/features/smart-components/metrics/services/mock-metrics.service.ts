import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap, throwError } from 'rxjs';

import {
    Alert,
    DashboardMetrics,
    EnergyData,
    IMetricsService
} from '@features/smart-components/metrics/services/metrics.types';
import {
    generateMockEnergyData,
    MOCK_ALERTS,
    MOCK_DASHBOARD_METRICS
} from '@features/smart-components/metrics/services/mock-data';

/**
 * Имитация работы сервиса метрик.
 * Имитирует HTTP-запросы с задержками в целях разработки.
 *
 * Отвечает на вопрос "откуда брать данные?"
 */
@Injectable({
    providedIn: 'root'
})
export class MockMetricsService implements IMetricsService {
    private alerts = [...MOCK_ALERTS];

    public getDashboardMetrics(): Observable<DashboardMetrics> {
        return of(MOCK_DASHBOARD_METRICS).pipe(
            delay(700),
            tap(() => console.log('[MOCK] GET /api/metrics/dashboard')),
            map(metrics => ({
                ...metrics,
                alerts: this.alerts.filter(a => !a.acknowledged)
            }))
        );
    }

    public getActiveAlerts(): Observable<Alert[]> {
        return of(this.alerts.filter(a => !a.acknowledged)).pipe(
            delay(500),
            tap(() => console.log('[MOCK] GET /api/alerts/active'))
        );
    }

    public acknowledgeAlert(alertId: string): Observable<Alert> {
        const alertIndex = this.alerts.findIndex(a => a.id === alertId);

        if (alertIndex === -1) {
            return throwError(() => new Error(`Предупреждение с идентификатором ${alertId} не найдено`)).pipe(
                delay(300)
            );
        }

        this.alerts[alertIndex] = {
            ...this.alerts[alertIndex],
            acknowledged: true
        };

        return of(this.alerts[alertIndex]).pipe(
            delay(400),
            tap(() => console.log(`[MOCK] PATCH /api/metrics/${alertId}/acknowledge`))
        );
    }

    public getEnergyData(startDate: Date, endDate: Date): Observable<EnergyData[]> {
        return of(generateMockEnergyData(startDate, endDate)).pipe(
            delay(600),
            tap(() => console.log('[MOCK] GET /api/energy-data'))
        );
    }
}
