import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';

  
  constructor(
    private post: PostService
  ) { }

  ngOnInit() {

    this.post.consecutiveRequest();
  }
}
