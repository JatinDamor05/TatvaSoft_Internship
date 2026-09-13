import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.html'
})
export class NotificationComponent implements OnInit, OnDestroy {

  message: string = '';

  subscription!: Subscription;

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {

    console.log('NotificationComponent started');

    this.subscription =
      this.notificationService.notifications$.subscribe(
        (message: string) => {

          console.log('Notification received:', message);

          this.message = message;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}