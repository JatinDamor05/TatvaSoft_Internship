import { Component, signal } from '@angular/core';

import { AuthService } from './core/auth';
import { LoggerService } from './core/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practical-12');
  constructor(
  private authService: AuthService,
  private loggerService: LoggerService
) {}

testCoreServices(): void {
  const loginMessage = this.authService.login();

  this.loggerService.log('LoggerService is working');

  console.log(loginMessage);
}
}
