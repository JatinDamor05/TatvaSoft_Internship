import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface CartItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cart-rxjs.html',
  styleUrl: './cart-rxjs.css'
})
export class CartRxjs {

  cartItems$ = new BehaviorSubject<CartItem[]>([
    { name: 'Laptop', price: 50000 },
    { name: 'Mouse', price: 1000 }
  ]);

  totalPrice$ = this.cartItems$.pipe(
    map(items =>
      items.reduce((total, item) => total + item.price, 0)
    )
  );

  addItem() {
    const currentItems = this.cartItems$.value;

    this.cartItems$.next([
      ...currentItems,
      { name: 'Keyboard', price: 2000 }
    ]);
  }
}