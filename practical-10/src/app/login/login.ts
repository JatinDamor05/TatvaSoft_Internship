import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password);

    // console.log('Logged in:', this.authService.isLoggedIn());
    console.log(
      'Token expired:',
      this.authService.isTokenExpired()
    );

    this.router.navigate(['/dashboard']);
  }
}