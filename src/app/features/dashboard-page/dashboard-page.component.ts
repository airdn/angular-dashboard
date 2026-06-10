import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Главная страница панели управления.
 * Объединяет метрики и список панелей.
 */
@Component({
    selector: 'app-dashboard-page',
    imports: [],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
    private readonly router = inject(Router);
}
