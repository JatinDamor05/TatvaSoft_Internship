import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-signal',
  imports: [],
  templateUrl: './shopping-cart-signal.html'
})
export class ShoppingCartSignalComponent {

  cartCount = signal(0);

  addItem(): void {
    this.cartCount.update(count => count + 1);
  }

  clearCart(): void {
    this.cartCount.set(0);
  }
}