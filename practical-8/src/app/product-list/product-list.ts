import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html'
})
export class ProductListComponent {

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addItem();
  }
}