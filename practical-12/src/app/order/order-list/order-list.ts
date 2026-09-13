import { Component } from '@angular/core';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-order-list',
  standalone: false,
  templateUrl: './order-list.html',
  styleUrl: './order-list.css'
})
export class OrderList {

  authId: string;

  constructor(private authService: AuthService) {
    this.authId = this.authService.serviceId;

    console.log(
      'OrderList AuthService:',
      this.authService.serviceId
    );
  }
}