import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: Todo;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  deleteTodo() {
    this.todosService.deleteTodo(this.todo);
  }
}
