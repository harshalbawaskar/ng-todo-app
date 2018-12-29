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

  constructor(private todosService: TodosService,
    private router: Router) {
    this.todo = new Todo();
    this.todo.id = '12345' + (todosService.todos.length + 1);
  }

  ngOnInit() { }

  saveTodo() {
    if (this.todo.title && this.todo.description) {
      this.todosService.addTodo(this.todo);
      this.router.navigate(['/todos']);
    }
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}
