import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

import {Todo } from '../models/todo';
// import {tap} from 'rxjs/operators';

/**
 * Following a new tutorial but leaving previous code
 *  https://www.sitepoint.com/angular-2-tutorial/
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService{
  lastId = 0;

  todos: Todo[] = [];

  constructor() {
  }


  // Simulate POST /todos
  addTodo(todo: Todo): ApiService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodo(id: number): ApiService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodo(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.
    filter(todo => todo.id === id).pop();
  }

  // Toggle Todo Complete
  toggleTodo(todo: Todo) {
    let updatedTodo = this.updateTodo(todo.id, {
      completed: !todo.completed
    });
    return updatedTodo;
  }
}
// Old Code
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   apiUrl = 'http://127.0.0.1:8000/';
//
//   parse_link_header(header) {
//     if (header.length === 0) {
//       return ;
//     }
//
//     const parts = header.split(',');
//     let links = {};
//     parts.forEach( p => {
//       const section = p.split(';');
//       const url = section[0].replace(/<(.*)>/, '$1').trim();
//       const name = section[1].replace(/rel="(.*)"/, '$1').trim();
//       links[name] = url;
//
//     });
//     return links;
//   }
//
//   public retrieve_pagination_links(response){
//       const linkHeader = this.parse_link_header(response.headers.get('Link'));
//       this.firstPage = linkHeader["first"];
//       this.lastPage =  linkHeader["last"];
//       this.prevPage =  linkHeader["prev"];
//       this.nextPage =  linkHeader["next"];
// }
//
//   public createTodo(todo: Todo) {
//     return this.httpClient.post(`${this.apiUrl}/todo/`, todo);
//   }
//
//   public updateTodo(todo: Todo) {
//     return this.httpClient.put(`${this.apiUrl}/todo/`, todo);
//   }
//
//   public deleteTodo(id: number) {
//     return this.httpClient.delete(`${this.apiUrl}/todo/${id}`);
//   }
//
//   public getTodoById(id: number) {
//     return this.httpClient.get(`${this.apiUrl}/todo/${id}`);
//   }
//
//   // public getTodos(url?: string): Observable<Todo[]> {
//   //   if (url) {
//   //     return this.httpClient.get<Todo[]>(url,{ observe: 'response' }).pipe(tap(res => {
//   //       this.retrieve_pagination_links(res);
//   //     }));
//   //   }
//   //   return this.httpClient.get<Todo[]>(`${this.apiUrl}/todo?page=1`,
//   //     {observe: 'response'}).pipe(tap(res => {
//   //       this.retrieve_pagination_links(res);
//   //   }));
//   // }
//
//   public firstPage = "";
//
//   public prevPage = "";
//
//   public nextPage = "";
//
//   public lastPage = "";
//
//   constructor( private httpClient: HttpClient) { }
// }
// // TODO: Figure out how to call this!
