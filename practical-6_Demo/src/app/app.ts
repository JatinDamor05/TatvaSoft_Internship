import { Component } from '@angular/core';

import { CounterOne } from './counter-one/counter-one';
import { CounterTwo } from './counter-two/counter-two';
import { AddToCartComponent } from './add-to-cart/add-to-cart';
import { CartBadgeComponent } from './cart-badge/cart-badge';
import { UsersComponent } from './users/users';

@Component({
  selector: 'app-root',
  imports: [
    CounterOne,
    CounterTwo,
    AddToCartComponent,
    CartBadgeComponent,
    UsersComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}