import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Phone', price: 600 },
    { id: 3, name: 'Tablet', price: 400 },
    { id: 4, name: 'Keyboard', price: 50 },
    { id: 5, name: 'Mouse', price: 30 },
    { id: 6, name: 'Monitor', price: 250 },
    { id: 7, name: 'Headphones', price: 100 },
    { id: 8, name: 'Webcam', price: 80 },
    { id: 9, name: 'Printer', price: 150 },
    { id: 10, name: 'Speaker', price: 70 }
  ];

  refreshList(): void {
    this.products = [
      ...this.products.map(product => ({
        ...product,
        price: product.id === 3 ? product.price + 20 : product.price
      })),
      {
        id: 11,
        name: 'Smart Watch',
        price: 200
      }
    ];
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }
}