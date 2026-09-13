import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class AlertComponent {

  @Input() message: string = '';

  @Input() type: 'success' | 'error' | 'warning' = 'success';

}