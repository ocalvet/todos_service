const chalk = require('chalk');
const uuidv4 = require('uuid/v4');
const UnknownError = require('../errors').UnknownError;
const ModelNotFoundError = require('../errors').ModelNotFoundError;

module.exports = class TodosService {
  constructor(db) {
    this.db = db;
  }
  findOne(id) {
    try {
      const foundTodo = this.db
        .get('todos')
        .find({ id })
        .value();
      if (!foundTodo) {
        throw new ModelNotFoundError(`Could not find todo with id ${id}`);
      }
      return foundTodo;
    } catch (e) {
      throw new UnknownError(
        `Something went wrong trying to find todo with id ${id}`
      );
    }
  }
  findAll() {
    try {
      return this.db.get('todos').value();
    } catch (e) {
      throw new UnknownError('Something went wrong trying to get all todos');
    }
  }
  create(todo) {
    try {
      const newTodo = { ...todo, id: uuidv4() };
      this.db
        .get('todos')
        .push(newTodo)
        .write();
      return newTodo;
    } catch (e) {
      throw new UnknownError(
        `Something went wrong creating todo "${JSON.stringify(todo)}"`
      );
    }
  }
  update(id, todo) {
    try {
      const newTodo = { ...todo };
      delete newTodo.id;
      return this.db
        .get('todos')
        .find({ id })
        .assign(newTodo)
        .write();
    } catch (e) {
      console.log(chalk.default.red(e.message));
      throw new UnknownError(
        `Something went wrong updating todo with id ${id}`
      );
    }
  }
  delete(id) {
    try {
      return this.db
        .get('todos')
        .remove({ id })
        .write();
    } catch (e) {
      throw new UnknownError(
        `Something went wrong deleting todo with id ${id}`
      );
    }
  }
};
