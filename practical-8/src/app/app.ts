import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart';
import { ProductListComponent } from './product-list/product-list';
import { HeaderBadgeComponent } from './header-badge/header-badge';
import { ShoppingCartSignalComponent } from './shopping-cart-signal/shopping-cart-signal';

@Component({
  selector: 'app-root',
  imports: [
    ProductListComponent,
    HeaderBadgeComponent,
    ShoppingCartSignalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log('Users received:', users);
      this.users = users;
    });
  }
}