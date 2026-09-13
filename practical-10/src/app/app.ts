import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XssDemoComponent } from './xss-demo/xss-demo';
import { SafeIframe } from './safe-iframe/safe-iframe';
import { AuthDemoComponent } from './auth-demo/auth-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            XssDemoComponent,
            SafeIframe,
            AuthDemoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practical-10');
}
