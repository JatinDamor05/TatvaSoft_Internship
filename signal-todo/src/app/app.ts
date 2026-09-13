import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddTodo } from './add-todo/add-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AddTodo,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.html'
})
export class App {
}