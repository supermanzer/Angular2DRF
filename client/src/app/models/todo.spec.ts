import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructort', () => {
    const todo = new Todo({
      name: 'Hello',
      description: 'My first todo',
      completed: true
    });
    expect(todo.name).toEqual('Hello');
    expect(todo.completed).toEqual(true);
  });
});
