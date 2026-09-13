import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html'
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  errorMessage = '';

  name = '';
  email = '';

  editingUser: any = null;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.errorMessage = 'Unable to load users. Please try again later.';
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.cdr.detectChanges();
    });
  }

  createUser(): void {
    const user = {
      name: this.name,
      email: this.email
    };

    this.userService.createUser(user).subscribe((response: any) => {
      console.log('User created:', response);

      this.users.push(response);

      this.name = '';
      this.email = '';

      this.cdr.detectChanges();
    });
  }

  editUser(user: any): void {
    this.editingUser = { ...user };
    this.name = user.name;
    this.email = user.email;
  }

  updateUser(): void {
    const updatedUser = {
      name: this.name,
      email: this.email
    };

    this.userService
      .updateUser(this.editingUser.id, updatedUser)
      .subscribe((response: any) => {

        console.log('User updated:', response);

        const index = this.users.findIndex(
          user => user.id === this.editingUser.id
        );

        if (index !== -1) {
          this.users[index] = {
            ...this.users[index],
            name: this.name,
            email: this.email
          };
        }

        this.editingUser = null;
        this.name = '';
        this.email = '';

        this.cdr.detectChanges();
      });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {

      console.log('User deleted:', id);

      this.users = this.users.filter(
        user => user.id !== id
      );

      this.cdr.detectChanges();
    });
  }

}