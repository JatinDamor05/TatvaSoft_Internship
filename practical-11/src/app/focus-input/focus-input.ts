import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-focus-input',
  imports: [],
  templateUrl: './focus-input.html',
  styleUrl: './focus-input.css'
})
export class FocusInputComponent implements AfterViewInit {

  @ViewChild('myInput')
  myInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.myInput.nativeElement.focus();
  }
}