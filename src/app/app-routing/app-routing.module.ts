import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoComponent } from '../components/todo/todo.component';
import { EditTodoComponent } from '../components/edit-todo/edit-todo.component';
import { UserComponent } from '../components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { AddTodoComponent } from '../components/add-todo/add-todo.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'todos',
  canActivateChild: [AuthGuard],
  children: [{
    path: '',
    component: TodoListComponent
  }, {
    path: 'add',
    component: AddTodoComponent
  }, {
    path: ':id',
    component: TodoComponent
  }, {
    path: ':id/edit',
    component: EditTodoComponent
  }]
}, {
  path: 'user',
  component: UserComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
