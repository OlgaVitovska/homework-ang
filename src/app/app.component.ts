import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo list';
  tacks = [{
    title: 'Homework 21',
    text: 'JS. ООП',
    status: false
  }, {
    title: 'Homework 22',
    text: 'Gulp',
    status: true
  }, {
    title: 'Homework 23',
    text: 'Angular 1',
    status: true
  }, {
    title: 'Homework 24',
    text: 'TypeScript',
    status: false
  }]
}