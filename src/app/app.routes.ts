import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component'),
    },
    {
        path: 'transactions',
        loadComponent: () =>
            import('./pages/transactions/transactions.component'),
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component'),
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component'),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
