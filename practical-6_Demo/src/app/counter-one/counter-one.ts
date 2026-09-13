import { Component } from '@angular/core';
import { CounterService } from '../counter';

@Component({
  selector: 'app-counter-one',
  imports: [],
  templateUrl: './counter-one.html',
  styleUrl: './counter-one.css'
})
export class CounterOne {
  constructor(public counterService: CounterService) {}
}