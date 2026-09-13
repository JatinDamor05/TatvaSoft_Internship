import { Component, signal, ViewChild, ViewChildren, QueryList, ViewContainerRef, AfterViewInit } from '@angular/core';

import { ButtonComponent } from './button/button';
import { CardComponent } from './card/card';
import { InputFieldComponent } from './input-field/input-field';
import { PanelComponent } from './panel/panel';
import { TabsComponent } from './tabs/tabs';
import { TabComponent } from './tab/tab';
import { FocusInputComponent } from './focus-input/focus-input';
import { CounterComponent } from './counter/counter';

import { WrapperComponent } from './wrapper/wrapper';
import { HighlightDirective } from './highlight.directive';
import { AlertComponent } from './alert/alert';
import { ModalService } from './modal.service';


@Component({
  selector: 'app-root',
  imports: [
    ButtonComponent,
    CardComponent,
    InputFieldComponent,
    PanelComponent,
    TabsComponent,
    TabComponent,
    FocusInputComponent,
    CounterComponent,
    WrapperComponent,
    HighlightDirective,
    AlertComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements AfterViewInit {

  @ViewChild('myCounter', { static: true })
  counter!: CounterComponent;

  @ViewChildren(CounterComponent)
  counters!: QueryList<CounterComponent>;

  @ViewChild('alertContainer', { read: ViewContainerRef })
  alertContainer!: ViewContainerRef;

  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.modalService.setContainer(this.modalContainer);
  }

  incrementChild(): void {

    console.log('PARENT before:', this.counter.count);

    this.counter.increment();

    console.log('PARENT after:', this.counter.count);
  }

  resetAll(): void {
    this.counters.forEach(counter => {
      counter.reset();
    });
  }

  protected readonly title = signal('practical-11');

  lastMessage: string = 'No button clicked yet';

  name: string = '';
  email: string = '';

  handleButtonClick(message: string): void {
    this.lastMessage = message;
  }

  handleNameChange(value: string): void {
    this.name = value;
  }

  handleEmailChange(value: string): void {
    this.email = value;
  }

  submitForm(): void {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
  }

  showSuccess(): void {
    const alert = this.alertContainer.createComponent(AlertComponent);

    alert.setInput('message', 'Operation completed successfully!');
    alert.setInput('type', 'success');
  }

  showError(): void {
    const alert = this.alertContainer.createComponent(AlertComponent);

    alert.setInput('message', 'Something went wrong!');
    alert.setInput('type', 'error');
  }

  showWarning(): void {
    const alert = this.alertContainer.createComponent(AlertComponent);

    alert.setInput('message', 'Please be careful!');
    alert.setInput('type', 'warning');
  }

  clearAllAlerts(): void {
    this.alertContainer.clear();

    console.log('All alerts cleared');
  }

  openModal(): void {
    this.modalService.open(
      'Hello!',
      'This modal was created dynamically using ModalService.'
    );
  }

}