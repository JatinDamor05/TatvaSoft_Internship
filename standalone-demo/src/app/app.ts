import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    ProductCard,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}