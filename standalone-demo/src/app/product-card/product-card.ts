import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  products = [
    { name: 'Laptop', price: 50000 },
    { name: 'Mouse', price: 1000 },
    { name: 'Keyboard', price: 2000 }
  ];

}