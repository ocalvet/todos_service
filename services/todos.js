const UnknownError = require('../errors').UnknownError;
const ModelNotFoundError = require('../errors').ModelNotFoundError;

module.exports = class TodosService {
  constructor(db) {
    this.db = db;
  }
  findOne(id) {
    return {
      id,
      name: 'test'
    };
  }
  findAll() {
    return [{ id: 1, name: 'test' }, { id: 2, name: 'second' }];
  }
  create(user) {
    return { ...user, id: 11 };
  }
  update(id, user) {
    throw new UnknownError('Testing errors!!!');
    return { ...user, id };
  }
  delete(id) {
    return id;
  }
};
