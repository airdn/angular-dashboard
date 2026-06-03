import { Routes } from '@angular/router';

import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    // {
    //     path: 'dashboard',
    //     component: DashboardPageComponent,
    //     title: 'Dashboard Page'
    // },
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard-page/dashboard-page.component')
            .then(m => m.DashboardPageComponent),
        title: 'Dashboard Page'
    },
];
