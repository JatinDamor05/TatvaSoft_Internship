import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    data: {
      title: 'Products loaded from Shell App'
    },
    loadComponent: () =>
      import('productApp/ProductsComponent').then(
        m => m.Products
      )
  }
];