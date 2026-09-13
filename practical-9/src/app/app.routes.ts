import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./reports/reports').then(m => m.Reports)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings').then(m => m.Settings)
  }
];