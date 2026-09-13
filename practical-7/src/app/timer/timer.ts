import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class TimerComponent implements OnInit, OnDestroy {

  counter = 0;
  intervalId: any;

  ngOnInit(): void {
    console.log('Timer started');

    this.intervalId = setInterval(() => {
      this.counter++;
      console.log('Counter:', this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Timer stopped');
  }
}