import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { roleGuard } from './role-guard';
import { Admin } from './admin/admin';
import { Forbidden } from './forbidden/forbidden';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  {
    path: 'admin',
    component: Admin,
    canActivate: [roleGuard]
  },

  {
    path: 'forbidden',
    component: Forbidden
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];