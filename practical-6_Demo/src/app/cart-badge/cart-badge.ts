import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  imports: [AsyncPipe],
  templateUrl: './cart-badge.html'
})
export class CartBadgeComponent {

  constructor(private cartService: CartService) {}

  get cartItems$() {
    return this.cartService.cartItems$;
  }
}