import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TodosService } from './services/todos.service';
import { UserService } from './services/user.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    TodoListComponent,
    EditTodoComponent,
    UserComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodosService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddTodoComponent]
})
export class AppModule { }
