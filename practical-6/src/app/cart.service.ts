import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<number>(0);

  cartItems$: Observable<number> = this.cartItems.asObservable();

  addItem(): void {
    this.cartItems.next(this.cartItems.value + 1);
  }
}