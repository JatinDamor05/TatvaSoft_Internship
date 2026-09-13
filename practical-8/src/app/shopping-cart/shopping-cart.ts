import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.html'
})
export class ShoppingCartComponent {

  cartCount = 0;

  addItem(): void {
    this.cartCount++;
  }

}