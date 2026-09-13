import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent {

  count: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  increment(): void {
    this.count++;

    console.log('Counter incremented:', this.count);

    this.cdr.detectChanges();
  }

  reset(): void {
    this.count = 0;

    console.log('Counter reset');

    this.cdr.detectChanges();
  }

}