import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, shareReplay, throwError } from 'rxjs';

import { MockMetricsService } from '@features/smart-components/metrics/services/mock-metrics.service';
import { HttpMetricsService } from '@features/smart-components/metrics/services/http-metrics.service';
import { Alert, DashboardMetrics, EnergyData } from '@features/smart-components/metrics/services/metrics.types';
import { MetricCard } from '@shared/ui-components/metric-card';

/**
 * Пример использования: Получение метрик панели мониторинга.
 * Организация процесса получения и преобразования метрик.
 *
 * Отвечает на вопрос "Как подготовить данные для UI?"
 */
@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private mockMetricsService = inject(MockMetricsService);

    /**
     * Основные показатели можно получить с панели управления.
     */
    public execute(): Observable<DashboardMetrics> {
        return this.mockMetricsService.getDashboardMetrics().pipe(
            shareReplay(1),
            catchError(error => {
                console.error('Ошибка при получении метрик:', error);
                return throwError(() => new Error('Не удалось загрузить метрики'));
            })
        );
    }

    /**
     * Преобразуйте метрики в карточки пользовательского интерфейса.
     */
    public getMetricCards(): Observable<MetricCard[]> {
        return this.execute().pipe(
            map(metrics => this.transformToCards(metrics))
        );
    }

    /**
     * Получайте активные оповещения.
     */
    public getActiveAlerts(): Observable<Alert[]> {
        return this.mockMetricsService.getActiveAlerts().pipe(
            catchError((error) => {
                console.error('Ошибка при получении уведомлений:', error);
                return throwError(() => new Error('Не удалось загрузить оповещения'));
            })
        );
    }

    /**
     * Отметьте оповещение как обнаруженное.
     */
    public acknowledgeAlert(alertId: string): Observable<Alert> {
        return this.mockMetricsService.acknowledgeAlert(alertId).pipe(
            catchError(error => {
                console.error(`Ошибка распознавания оповещения ${alertId}:`, error);
                return throwError(() => new Error('Сигнал тревоги не удалось распознать'))
            })
        );
    }

    /**
     * Он получает данные об энергии для построения графиков.
     */
    public getEnergyData(days: number = 30): Observable<EnergyData[]> {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        return this.mockMetricsService.getEnergyData(startDate, endDate).pipe(
            catchError((error) => {
                console.error('Ошибка при получении данных об энергии:', error);
                return throwError(() => new Error('Не удалось загрузить данные об энергопотреблении'))
            })
        );
    }

    /**
     * Трансформация данных для карточек.
     */
    private transformToCards(metrics: DashboardMetrics): MetricCard[] {
        return [
            {
                label: 'Active panels',
                value: metrics.activePanels,
                unit: `from ${metrics.totalPanels}`,
                icon: 'solar_power',
                trend: {
                    direction: 'up',
                    percentage: 5,
                    period: 'compared to the current month'
                },
                color: 'success'
            },
            {
                label: 'Total production',
                value: Math.round(metrics.totalEnergyProduction),
                unit: 'kWh',
                icon: 'bolt',
                trend: {
                    direction: 'up',
                    percentage: 12,
                    period: 'compared to the previous month'
                },
                color: 'primary'
            }
        ];
    }
}
