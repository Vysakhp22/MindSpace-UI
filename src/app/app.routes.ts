import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/home/home').then(m => m.Home)
            }
        ]
    }
];
