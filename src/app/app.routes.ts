import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component'),
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component'),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
