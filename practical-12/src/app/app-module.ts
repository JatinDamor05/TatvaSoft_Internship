import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { SharedModule } from './shared/shared-module';
import { CoreModule } from './core/core-module';


@NgModule({
  declarations: [
    App,
    Dashboard
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],

  providers: [],

  exports: [
    Dashboard
  ],

  bootstrap: [
    App
  ]
})
export class AppModule {
}