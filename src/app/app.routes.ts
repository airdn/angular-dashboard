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
        loadComponent: () => import('./shared/preview/preview.component')
            .then(m => m.PreviewComponent),
        title: 'Preview Page'
    },
];
