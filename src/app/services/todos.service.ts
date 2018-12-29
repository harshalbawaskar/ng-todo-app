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
    this.todos = this.todos
      .filter((td) => td.id != todo.id);
  }

  updateTodo(todo: Todo) {
    this.deleteTodo(todo);

    this.todos.push(todo);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
