import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../user';

@Component({
  selector: 'app-user-two',
  imports: [CommonModule],
  templateUrl: './user-two.html',
  styleUrl: './user-two.css'
})
export class UserTwo implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('UserTwo requesting users');

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log('UserTwo received users');
    });
  }
}