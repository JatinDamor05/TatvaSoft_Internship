import { Component, computed, signal } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart-signal',
  standalone: true,
  imports: [],
  templateUrl: './cart-signal.html',
  styleUrl: './cart-signal.css'
})
export class CartSignal {

  cartItems = signal<CartItem[]>([
    { name: 'Laptop', price: 50000 },
    { name: 'Mouse', price: 1000 }
  ]);

  totalPrice = computed(() =>
    this.cartItems().reduce((total, item) => total + item.price, 0)
  );

  addItem() {
    this.cartItems.update(items => [
      ...items,
      { name: 'Keyboard', price: 2000 }
    ]);
  }
}