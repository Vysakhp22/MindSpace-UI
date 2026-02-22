import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./modules/layout/layout').then(m => m.Layout),
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./modules/home/home').then(m => m.Home)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
