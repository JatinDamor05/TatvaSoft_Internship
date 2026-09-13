import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../user';

@Component({
  selector: 'app-user-one',
  imports: [CommonModule],
  templateUrl: './user-one.html',
  styleUrl: './user-one.css'
})
export class UserOne {

  users: User[] = [];
  isLoading = false;

  constructor(private userService: UserService) {}

  loadUsers(): void {

    // Prevent another request while one is running
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    console.log('API request started');

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log('API response received');
      },

      error: (error) => {
        console.error('API error:', error);
      },

      complete: () => {
        this.isLoading = false;
        console.log('Loading finished');
      }
    });
  }
}