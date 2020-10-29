import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = environment.url;
  
  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}todos`);
  }

  getTodoById(id:number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}todos/${id}`);
  }
}