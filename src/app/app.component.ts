import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';
  comments;
  constructor(
    private post: PostService
  ) { }

  ngOnInit() {
    this.post.consecutiveRequest().subscribe((res) => {
      console.log(res);
      this.comments = res;
  });
}
}
