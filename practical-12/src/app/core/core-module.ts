import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth';
import { LoggerService } from './logger';

@NgModule({
  declarations: [],

  imports: [
    CommonModule
  ],

  providers: [
    AuthService,
    LoggerService
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule | null
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import CoreModule only in AppModule.'
      );
    }
  }
}