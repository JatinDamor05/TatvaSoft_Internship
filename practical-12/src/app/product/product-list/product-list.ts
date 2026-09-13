import { Component } from '@angular/core';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  authId: string;

  constructor(private authService: AuthService) {
    this.authId = this.authService.serviceId;

    console.log(
      'ProductList AuthService:',
      this.authService.serviceId
    );
  }
}