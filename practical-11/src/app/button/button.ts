import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {

  @Input() label: string = '';

  @Input() color: 'primary' | 'danger' | 'success' = 'primary';

  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<string>();

  onClick(): void {
    this.clicked.emit(`${this.label} button was clicked`);
  }
}