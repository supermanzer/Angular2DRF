import { TestBed, async, inject } from '@angular/core/testing';
import { Todo} from '../models/todo';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ApiService]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([ApiService], (service: ApiService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([ApiService], (service: ApiService) => {
      const todo1 = new Todo({name: 'Todo1', complete: false});
      const todo2 = new Todo({name: 'Todo2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([ApiService], (service: ApiService) => {
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });

  describe('#deleteTodoById', () =>{
    it('should remove todo with correpsonding id', inject([ApiService], (service: ApiService) => {
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodo(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodo(2);
      expect(service.getAllTodos()).toEqual([]);
    }));
    it('should not remove todo where id does not match', inject([ApiService], (service: ApiService)=>{
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodo(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#updateToDoById(id, values)', () => {
    it('should return todo with corresponding id and updated data', inject([ApiService], (service: ApiService)=>{
      const todo = new Todo({name: 'Hello 1', complete: false});
      service.addTodo(todo);
      const updatedTodo = service.updateTodo(1, {name: 'New, better name'});
      expect(updatedTodo.name).toEqual('New, better name');
    }));

    it('should return null if not found', inject([ApiService], (service: ApiService) => {
      const todo = new Todo({name: 'Things', complete: false});
      service.addTodo(todo);
      const updatedTodo = service.updateTodo(12, {title: 'new title'});
      expect(updatedTodo).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('should return the updated todo with inverted completed status', inject([ApiService], (service: ApiService) => {
      const todo = new Todo({title: 'Hello', completed: false});
      service.addTodo(todo);
      const updatedTodo = service.toggleTodo(todo);
      expect(updatedTodo.completed).toEqual(true);
      service.toggleTodo(todo);
      expect(updatedTodo.completed).toEqual(false);
    }));
  });
});
