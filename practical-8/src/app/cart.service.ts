import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  addItem(): void {
    const currentCount = this.cartCountSubject.value;

    this.cartCountSubject.next(currentCount + 1);

    console.log('Cart count:', this.cartCountSubject.value);
  }
}