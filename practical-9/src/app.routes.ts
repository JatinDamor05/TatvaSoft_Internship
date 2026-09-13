import { Routes } from '@angular/router';
import { Home } from './app/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./app/reports/reports').then(m => m.Reports)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./app/settings/settings').then(m => m.Settings)
  }
];