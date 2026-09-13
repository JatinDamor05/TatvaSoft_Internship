import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todos',
    loadComponent: () =>
      import('./todo-list/todo-list').then(
        m => m.TodoList
      )
  }
];