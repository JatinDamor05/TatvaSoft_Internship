import { Component } from '@angular/core';
import { CardComponent } from './card/card';
import { NgIf } from '@angular/common';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo';
import { TimerComponent } from './timer/timer';
import { ObservableDemoComponent } from './observable-demo/observable-demo';

@Component({
  selector: 'app-root',
  imports: [LifecycleDemoComponent, NgIf, CardComponent, TimerComponent, ObservableDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showObservable = true;

  messageData = {
    text: 'Hello from Parent'
  };

  showChild = true;

  changeMessage(): void {
    this.messageData = {
      ...this.messageData,
      text: 'Message changed!'
    };
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }

  

}