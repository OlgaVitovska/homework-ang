import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 constructor(
        private http: HttpClient
  ) { }

consecutiveRequest(): Observable<any> {
  return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .pipe(
      mergeMap(posts => {
        console.log(posts);
        return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=1`);
      })
    );
  }
}