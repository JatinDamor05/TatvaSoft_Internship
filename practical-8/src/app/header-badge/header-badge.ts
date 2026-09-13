import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header-badge',
  imports: [AsyncPipe],
  templateUrl: './header-badge.html'
})
export class HeaderBadgeComponent {

  cartCount$;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$;
  }

}