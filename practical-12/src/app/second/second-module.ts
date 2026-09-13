import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPage } from './second-page/second-page';
import { AppModule } from '../app-module';

@NgModule({
  declarations: [
    SecondPage
  ],

  imports: [
    CommonModule,
    AppModule
  ],

  exports: [
    SecondPage
  ]
})
export class SecondModule {
}