import { Component } from '@angular/core';
import { CounterDisplayComponent } from './counter-display/counter-display';
import { ProductListComponent } from './product-list/product-list';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ApiDemo } from './api-demo/api-demo';
import { UserOne } from './user-one/user-one';
import { UserTwo } from './user-two/user-two';

@Component({
  selector: 'app-root',
  imports: [CounterDisplayComponent,
            ProductListComponent,
            RouterOutlet,
            RouterLink,
            ApiDemo,
            UserOne,
            UserTwo,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
  export class App {

  counter = { value: 0 };

  increment(): void {
    this.counter = {
      ...this.counter,
      value: this.counter.value + 1
    };
  }

}