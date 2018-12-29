import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  public todo: Todo;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private todosService: TodosService) { }

  ngOnInit() {
    let todo = this.todosService.getTodo(this.activatedRoute.snapshot.params['id']);
    this.createTempTodo(todo);

    this.paramsSubscription = this.activatedRoute
      .params
      .subscribe((params) => {
        todo = this.todosService.getTodo(this.activatedRoute.snapshot.params['id']);
        this.createTempTodo(todo);
      });
  }

  createTempTodo(exstTodo: Todo) {
    this.todo = new Todo();

    if (exstTodo) {
      this.todo.id = exstTodo.id;
      this.todo.title = exstTodo.title;
      this.todo.description = exstTodo.description;
      this.todo.isCompleted = exstTodo.isCompleted;
    }
  }

  saveChanges() {
    this.todosService.updateTodo(this.todo);
    this.router.navigate(['/todos']);
  }

  cancelEdit() {
    this.router.navigate(['/todos']);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
