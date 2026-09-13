import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css'
})
export class InputFieldComponent {

  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() errorMessage: string = '';

  @Output() valueChange = new EventEmitter<string>();

  value: string = '';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.valueChange.emit(this.value);
  }
}