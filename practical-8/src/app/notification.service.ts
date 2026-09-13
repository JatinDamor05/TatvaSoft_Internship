import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject = new Subject<string>();

  notifications$ = this.notificationSubject.asObservable();

  show(message: string): void {
    console.log('Service received:', message);

    this.notificationSubject.next(message);
  }
}