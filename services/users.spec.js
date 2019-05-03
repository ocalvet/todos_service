const UsersController = require('./users');
const { ModelNotFoundError, UnknownError } = require('../errors');

describe('users.findOne', function() {
  const users = new UsersController();
  it('throws an exception', function() {
    expect(() => users.findOne('123')).toThrow();
  });
  it('throws a specific exception', () => {
    expect(() => users.findOne('324')).toThrow(ModelNotFoundError);
  });
});

describe('users.findAll', () => {
  const users = new UsersController();
  it('returns all users', () => {
    const allUsers = users.findAll();
    expect(allUsers).toEqual([
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

describe('users.create', () => {
  const users = new UsersController();
  it('returns the created user with an id of 11', () => {
    const createdUser = users.create({ name: 'test user' });
    expect(createdUser).toEqual({
      id: 11,
      name: 'test user'
    });
  });
});

describe('users.update', () => {
  const users = new UsersController();
  it('throws an unknown error with the message ""', () => {
    expect(() => users.update()).toThrow(UnknownError);
    expect(() => users.update()).toThrow('Testing errors!!!');
  });
});

describe('users.delete', () => {
  const users = new UsersController();
  it('returns the id of the deleted user', () => {
    const deletedId = users.delete('123456');
    expect(deletedId).toEqual('123456');
  });
});
