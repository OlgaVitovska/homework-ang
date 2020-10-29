import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { TodoComponent } from './todo-list/todo/todo.component';
import { TodosComponent } from './todo-list/todos/todos.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'todos', component: TodosComponent
  },
  {
    path: 'todos/:id', component: TodoComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
