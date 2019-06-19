import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Todo } from "../models/todo";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // GET ALL TODOS
  public getTodos() {
    return this.http.get<Todo[]>(`${API_URL}/todo/`);
  }
}
