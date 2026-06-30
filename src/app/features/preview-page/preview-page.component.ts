import { Component } from '@angular/core';

import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';
import { ErrorMessageComponent } from '@shared/ui-components/error-message';
import { MetricCard, MetricCardComponent } from '@shared/ui-components/metric-card';
import { PanelStatusBadgeComponent } from '@shared/ui-components/panel-status-badge/panel-status-badge.component';
import { PanelCardComponent } from '@shared/ui-components/panel-card/panel-card.component';
import { Panel } from '@features/smart-components/panels/services/panels.types';

/**
 * Просмотр превью компонентов
 */
@Component({
    selector: 'app-preview-page',
    imports: [
        LoadingSpinnerComponent,
        ErrorMessageComponent,
        MetricCardComponent,
        PanelStatusBadgeComponent,
        PanelCardComponent
    ],
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

    public panel: Panel = {
        id: '0',
        name: 'test-name',
        location: {
            address: 'test-address',
            city: 'test-city',
            region: 'test-region',
            coordinates: {
                lat: 1,
                lng: 2
            }
        },
        status: 'active',
        currentProduction: 3,
        estimatedProduction: 4,
        efficiency: 5,
        installationDate: new Date(2026, 5, 30),
        lastMaintenance: new Date(2026, 6, 1)
    };
}
