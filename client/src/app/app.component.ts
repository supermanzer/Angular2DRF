import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent  {
  // PROPERTIES
  newTodo: Todo = new Todo();

  // METHODS
  constructor(private apiService: ApiService) {}

  // Create Todo
  addTodo() {
    this.apiService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  // Update Todo
  toggleTodoComplete(todo) {
    this.apiService.toggleTodo(todo);
  }

  // Delete Todo
  removeTodo(todo) {
    this.apiService.deleteTodo(todo.id);
  }
  // Read Todos
  get todos() {
    return this.apiService.getAllTodos();
  }
}
