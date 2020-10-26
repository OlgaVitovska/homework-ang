import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 constructor(
        private http: HttpClient
  ) { }

consecutiveRequest() {
  this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(
        map((posts) => {
          console.log(posts);
          return posts;
        }),
        mergeMap((posts) => {
          return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        })
      ).subscribe((comments) => {
        return (comments);
      });
  }
}