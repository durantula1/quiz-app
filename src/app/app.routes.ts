import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home-page/home-page.component').then(c => c.HomePageComponent)
    },
    {
        path: 'summary',
        loadComponent: () => import('./components/summary-page/summary-page.component').then(c => c.SummaryPageComponent)
    },
];
