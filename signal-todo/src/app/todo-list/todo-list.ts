import {
  Component,
  computed,
  effect,
  inject
} from '@angular/core';

import { TodoService } from '../todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.html'
})
export class TodoList {

  private todoService = inject(TodoService);

  todos = this.todoService.todos;

  count = computed(() => this.todos().length);

  constructor() {
    effect(() => {
      console.log(
        'Todo list changed:',
        this.todos()
      );
    });
  }
}