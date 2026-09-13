import { Component, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ObservableService } from '../observable';

@Component({
  selector: 'app-observable-demo',
  imports: [AsyncPipe],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css'
})
export class ObservableDemoComponent implements OnDestroy {

  counter$: Observable<number>;

  constructor(private observableService: ObservableService) {
    this.counter$ = this.observableService.counter$;

    console.log('ObservableDemo created');
  }

  ngOnDestroy(): void {
    console.log('ObservableDemo destroyed - async pipe subscription cleaned up');
  }
}