import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';

  openForm = 'login';

  changeForm(form) {
    this.openForm = form;
  }
}