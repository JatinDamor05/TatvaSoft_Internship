import { Injectable, signal } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular Signals'
    },
    {
      id: 2,
      title: 'Build Signal Todo App'
    }
  ]);

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      title: title
    };

    this.todos.update(currentTodos => [
      ...currentTodos,
      newTodo
    ]);
  }
}