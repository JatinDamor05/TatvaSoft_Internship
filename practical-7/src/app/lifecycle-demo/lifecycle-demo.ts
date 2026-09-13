import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  imports: [],
  templateUrl: './lifecycle-demo.html',
  styleUrl: './lifecycle-demo.css'
})
export class LifecycleDemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() messageData!: { text: string };

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
  const messageChange = changes['messageData'];

    if (messageChange) {
      console.log('currentValue:', messageChange.currentValue);
      console.log('previousValue:', messageChange.previousValue);
      console.log('firstChange:', messageChange.firstChange);
    }
  } 

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}