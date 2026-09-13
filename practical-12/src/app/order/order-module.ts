import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing-module';
import { OrderList } from './order-list/order-list';
import { SharedModule } from '../shared/shared-module';
import { Loader } from '../shared/loader/loader';

@NgModule({
  declarations: [
    OrderList
  ],

  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule {
}