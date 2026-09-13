import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() imageUrl?: string;
}