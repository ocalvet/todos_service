const TodosController = require('./todos');
const { ModelNotFoundError, UnknownError } = require('../errors');

describe('todos.findOne', function() {
  const todos = new TodosController();
  it('throws an exception', function() {
    expect(() => todos.findOne('123')).toThrow();
  });
  it('throws a specific exception', () => {
    expect(() => todos.findOne('324')).toThrow(ModelNotFoundError);
  });
});

describe('todos.findAll', () => {
  const todos = new TodosController();
  it('returns all todos', () => {
    const allTodos = todos.findAll();
    expect(allTodos).toEqual([
      {
        id: 1,
        name: 'test'
      },
      {
        id: 2,
        name: 'second'
      }
    ]);
  });
});

describe('todos.create', () => {
  const todos = new TodosController();
  it('returns the created todo with an id of 11', () => {
    const createdTodo = todos.create({ name: 'test todo' });
    expect(createdTodo).toEqual({
      id: 11,
      name: 'test todo'
    });
  });
});

describe('todos.update', () => {
  const todos = new TodosController();
  it('throws an unknown error with the message ""', () => {
    expect(() => todos.update()).toThrow(UnknownError);
    expect(() => todos.update()).toThrow('Testing errors!!!');
  });
});

describe('todos.delete', () => {
  const todos = new TodosController();
  it('returns the id of the deleted todo', () => {
    const deletedId = todos.delete('123456');
    expect(deletedId).toEqual('123456');
  });
});
