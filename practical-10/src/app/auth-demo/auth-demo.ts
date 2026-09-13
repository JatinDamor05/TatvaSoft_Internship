import { Component } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  selector: 'app-auth-demo',
  imports: [],
  templateUrl: './auth-demo.html',
  styleUrl: './auth-demo.css'
})
export class AuthDemoComponent {

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login('admin', 'password');
    console.log('Logged in:', this.authService.isLoggedIn());
    console.log('Role:', this.authService.getRole());
  }

  logout(): void {
    this.authService.logout();
    console.log('Logged in:', this.authService.isLoggedIn());
  }
}