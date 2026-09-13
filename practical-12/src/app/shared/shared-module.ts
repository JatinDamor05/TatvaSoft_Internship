import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Loader } from './loader/loader';
import { Button } from './button/button';

@NgModule({
  declarations: [
    Loader,
    Button
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    Loader,
    Button,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}