import { Component } from '@angular/core';

import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';
import { ErrorMessageComponent } from '@shared/ui-components/error-message';
import { MetricCard, MetricCardComponent } from '@shared/ui-components/metric-card';
import { PanelStatusBadgeComponent } from '@shared/ui-components/panel-status-badge/panel-status-badge.component';

/**
 * Просмотр превью компонентов
 */
@Component({
    selector: 'app-preview-page',
    imports: [LoadingSpinnerComponent, ErrorMessageComponent, MetricCardComponent, PanelStatusBadgeComponent],
    templateUrl: './preview-page.component.html',
    styleUrl: './preview-page.component.scss'
})
export class PreviewPageComponent {
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
