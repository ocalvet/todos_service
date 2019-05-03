const router = require('express').Router();
const asyncWrapper = require('../utils/asyncWrapper');

module.exports = todosService => {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const todos = todosService.findAll();
      res.json(todos);
    })
  );

  router.get(
    '/:id',
    asyncWrapper(async (req, res) => {
      const todo = todosService.findOne(req.params.id);
      res.json(todo);
    })
  );

  router.post(
    '/',
    asyncWrapper(async (req, res) => {
      const todo = req.body;
      const createdTodo = todosService.create(todo);
      res.json(createdTodo);
    })
  );

  router.put(
    '/:id',
    asyncWrapper(async (req, res) => {
      const todo = req.body;
      const updatedTodo = todosService.update(req.params.id, todo);
      res.json(updatedTodo);
    })
  );

  router.delete(
    '/:id',
    asyncWrapper(async (req, res) => {
      todosService.delete(req.params.id);
      res.status(200).end();
    })
  );
  return router;
};
