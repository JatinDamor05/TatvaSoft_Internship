import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-to-cart',
  imports: [],
  templateUrl: './add-to-cart.html'
})
export class AddToCartComponent {

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addItem();
  }
}