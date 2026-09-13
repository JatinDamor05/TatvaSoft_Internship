import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { SecondPage } from './second/second-page/second-page';

const routes: Routes = [
  {
    path: 'second',
    component: SecondPage
  },

  {
    path: 'product',
    loadChildren: () =>
      import('./product/product-module')
        .then(m => m.ProductModule)
  },

  {
    path: 'order',
    loadChildren: () =>
      import('./order/order-module')
        .then(m => m.OrderModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}