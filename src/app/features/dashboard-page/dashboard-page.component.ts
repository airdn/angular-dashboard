import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MetricsOverviewComponent } from '@features/smart-components/metrics/metrics-overview/metrics-overview.component';
import { PanelListComponent } from '@features/smart-components/panels/panel-list/panel-list.component';

/**
 * Главная страница панели управления.
 * Объединяет метрики и список панелей.
 */
@Component({
    selector: 'app-dashboard-page',
    imports: [
        MetricsOverviewComponent,
        PanelListComponent
    ],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
    private readonly router = inject(Router);

    public onPanelSelected(panelId: string): void  {
        this.router.navigate(['/panels', panelId]);
    }
}
