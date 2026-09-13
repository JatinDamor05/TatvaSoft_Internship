import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xss-demo',
  imports: [FormsModule],
  templateUrl: './xss-demo.html',
  styleUrl: './xss-demo.css'
})
export class XssDemoComponent {
  userInput = '';
}