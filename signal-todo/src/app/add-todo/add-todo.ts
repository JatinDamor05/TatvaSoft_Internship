import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.html'
})
export class AddTodo {

  private todoService = inject(TodoService);

  todoTitle = '';

  addTodo(): void {
    const title = this.todoTitle.trim();

    if (!title) {
      return;
    }

    this.todoService.addTodo(title);

    this.todoTitle = '';
  }
}