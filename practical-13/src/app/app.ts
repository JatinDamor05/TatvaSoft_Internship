import { Component } from '@angular/core';
import { Counter } from './counter/counter';
import { CartSignal } from './cart-signal/cart-signal';
import { CartRxjs } from './cart-rxjs/cart-rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Counter,
    CartSignal,
    CartRxjs
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}