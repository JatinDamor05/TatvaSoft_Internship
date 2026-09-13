import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  // loadUsers(): void {
  //   console.log('Making HTTP request...');

  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(data => {
  //       console.log('Users received:', data);
  //     });
  // }
  loadUsers(): void {

    console.log('Testing 401 response...');

    this.http
      .get('/test-401')
      .subscribe({
        next: data => {
          console.log('Response:', data);
        },
        error: error => {
          console.log('Request error:', error);
        }
      });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}