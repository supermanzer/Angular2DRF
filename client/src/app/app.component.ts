import { Component, OnInit } from '@angular/core';

import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
  }
}
