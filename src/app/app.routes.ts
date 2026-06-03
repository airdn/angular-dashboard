import { Routes } from '@angular/router';

import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page.component';
// features/pages/dashboard/dashboard.component

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        title: 'Dashboard Page'
    },
];
