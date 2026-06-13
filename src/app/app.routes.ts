import { Routes } from '@angular/router';

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
        loadComponent: () => import('./features/dashboard-page/dashboard-page.component')
            .then(m => m.DashboardPageComponent),
        title: 'Dashboard Page'
    },
    {
        path: 'preview',
        loadComponent: () => import('./features/preview-page/preview-page.component')
            .then(m => m.PreviewPageComponent),
        title: 'Preview Page'
    },
];
