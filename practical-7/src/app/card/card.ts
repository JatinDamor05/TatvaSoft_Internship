import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent implements AfterContentInit {

  @ContentChild('projectedTitle')
  projectedTitle!: ElementRef;

  ngAfterContentInit(): void {
    console.log('Projected content:', this.projectedTitle);
    console.log('Projected element:', this.projectedTitle.nativeElement);
  }
}