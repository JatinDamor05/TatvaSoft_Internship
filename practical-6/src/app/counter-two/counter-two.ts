import { Component } from '@angular/core';
import { CounterService } from '../counter';

@Component({
  selector: 'app-counter-two',
  imports: [],
  templateUrl: './counter-two.html',
  styleUrl: './counter-two.css'
})
export class CounterTwo {
  constructor(public counterService: CounterService) {}
}