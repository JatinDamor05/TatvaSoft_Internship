import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { SharedModule } from '../shared/shared-module';
import { Loader } from '../shared/loader/loader';

@NgModule({
  declarations: [
    ProductList,
    ProductDetail
  ],

  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule {
}
