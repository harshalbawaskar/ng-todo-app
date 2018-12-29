import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public todo: Todo;

  constructor(private todosSerrvice: TodosService,
    private router: Router) {
    this.todo = new Todo();
  }

  ngOnInit() { }

  saveTodo() {
    if (this.todo.title && this.todo.description) {
      this.todosSerrvice.addTodo(this.todo);
      this.router.navigate(['/todos']);
    }
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}
