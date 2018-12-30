import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @ViewChild('todoForm') public todoForm: NgForm;

  constructor(private todosService: TodosService,
    private router: Router) { }

  ngOnInit() { }

  saveTodo() {
    const todo = new Todo();
    todo.id = '12345' + (this.todosService.todos.length + 1);
    todo.title = this.todoForm.value.title;
    todo.description = this.todoForm.value.description;

    this.todosService.addTodo(todo);
    this.router.navigate(['/todos']);
  }

  clear() {
    this.todoForm.reset();
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}
