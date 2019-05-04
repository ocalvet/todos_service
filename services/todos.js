const uuidv4 = require('uuid/v4');
const UnknownError = require('../errors').UnknownError;
const ModelNotFoundError = require('../errors').ModelNotFoundError;

module.exports = class TodosService {
  constructor(db) {
    this.db = db;
  }
  findOne(id) {
    return this.db
      .get('todos')
      .find({ id })
      .value();
  }
  findAll() {
    return this.db.get('todos').value();
  }
  create(todo) {
    return this.db
      .get('todos')
      .push({ ...todo, id: uuidv4() })
      .write();
  }
  update(id, todo) {
    const newTodo = { ...todo };
    delete newTodo.id;
    return db
      .get('todos')
      .find({ id })
      .assign(newTodo)
      .write();
  }
  delete(id) {
    return db
      .get('todos')
      .remove({ id })
      .write();
  }
};
