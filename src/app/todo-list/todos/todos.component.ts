import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodo()
  }
  getTodo() {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
    })
  }
}