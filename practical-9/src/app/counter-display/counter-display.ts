import {
  Component,
  Input,
  ChangeDetectionStrategy,
  DoCheck
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter-display',
  imports: [AsyncPipe],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterDisplayComponent implements DoCheck {

  @Input() counter!: { value: number };

  message$ = new Subject<string>();

  emitMessage(): void {
    this.message$.next('Observable emitted a new value!');
  }

  ngDoCheck(): void {
    console.log('CounterDisplayComponent - ngDoCheck');
  }
}