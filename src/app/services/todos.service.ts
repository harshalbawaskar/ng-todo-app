import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: Todo[] = [{
    id: '12345',
    title: 'Check in the code',
    description: 'Need to check in in progress chnages',
    isCompleted: true
  }, {
    id: '123456',
    title: 'Drink Water',
    description: 'Time to drink water',
    isCompleted: false
  }];

  constructor() { }

  getTodo(id: string) {
    return this.todos.find((todo) => todo.id == id);
  }

  deleteTodo(todo: Todo) {
    let idx = null;

    this.todos.forEach((t: Todo, index: number) => {
      if (todo.id === t.id) {
        idx = index;
      }
    })

    if (idx !== null) {
      this.todos.splice(idx, 1);
    }
  }

  updateTodo(newTodo: Todo) {
    for (const todo of this.todos) {
      if (todo.id === newTodo.id) {
        todo.description = newTodo.description;
        todo.title = newTodo.title;
        todo.isCompleted = newTodo.isCompleted;
        break;
      }
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
