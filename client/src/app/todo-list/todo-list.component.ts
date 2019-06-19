import { Component, OnInit } from '@angular/core';
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private apiService: TodoService) { }
  todos = [];

  ngOnInit() {
    this.apiService.getTodos().subscribe((data) => {
      console.log(data);
      this.todos = data['results']
    });
  }

}
