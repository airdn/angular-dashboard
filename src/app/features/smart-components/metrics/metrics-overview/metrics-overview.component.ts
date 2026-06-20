import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { DashboardService } from '@features/smart-components/metrics/services/dashboard.service';
import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';
import { ErrorMessageComponent } from '@shared/ui-components/error-message';
import { MetricCard, MetricCardComponent } from '@shared/ui-components/metric-card';
import { catchError, EMPTY } from 'rxjs';

/**
 * Умный компонент, который управляет визуализацией метрик.
 * Он извлекает данные из сценария использования и передает их компонентам представления.
 */
@Component({
    selector: 'app-metrics-overview',
    imports: [LoadingSpinnerComponent, ErrorMessageComponent, MetricCardComponent],
    templateUrl: './metrics-overview.component.html',
    styleUrl: './metrics-overview.component.scss'
})
export class MetricsOverviewComponent implements OnInit {
    private readonly dashboardService = inject(DashboardService);

    public isLoading = signal(true);
    public error = signal<string | null>(null);

    // Преобразование обсервабла в сигнал для современных методов реактивности
    public metricCards = toSignal(this.dashboardService.getMetricCards().pipe(
        catchError((error) => {
            this.error.set(error.message || 'Unknown error');

            return EMPTY;
        })
    ), {
        initialValue: [] as MetricCard[]
    });

    public ngOnInit() {
        // Имитация завершения загрузки данных
        setTimeout(() => this.isLoading.set(false), 800);
    }

    public loadMetrics(): void {
        this.isLoading.set(true);
        this.error.set(null);

        // toSignal автоматически продлит подписку
        setTimeout(() => this.isLoading.set(false), 800);
    }
}
