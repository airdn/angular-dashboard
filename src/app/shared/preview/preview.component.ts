import { Component } from '@angular/core';

import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';
import { ErrorMessageComponent } from '@shared/ui-components/error-message';
import { MetricCard, MetricCardComponent } from '@features/metrics/metric-card';

/**
 * Просмотр превью компонентов
 */
@Component({
    selector: 'app-preview',
    imports: [LoadingSpinnerComponent, ErrorMessageComponent, MetricCardComponent],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.scss'
})
export class PreviewComponent {
    public metric: MetricCard = {
        label: 'test-label',
        value: 100,
        unit: 'test-unit',
        icon: 'settings',
        trend: {
            direction: 'up',
            percentage: 10,
            period: 'test-period'
        },
        color: 'primary'
    };
}
