import {
  AfterContentInit,
  Component,
  ContentChild
} from '@angular/core';

import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.css'
})
export class WrapperComponent implements AfterContentInit {

  @ContentChild(HighlightDirective)
  highlightedElement!: HighlightDirective;

  ngAfterContentInit(): void {

    if (this.highlightedElement) {

      console.log('HighlightDirective found!');

      this.highlightedElement.element.nativeElement.style.backgroundColor =
        'yellow';

    } else {

      console.log('HighlightDirective NOT found');

    }
  }

}