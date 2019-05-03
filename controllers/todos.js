const router = require('express').Router();
const asyncWrapper = require('../utils/asyncWrapper');
const TodosService = require('../services/todos');
const todosServices = new TodosService();

router.get(
  '/',
  asyncWrapper(async (req, res) => {
    const todos = todosServices.findAll();
    res.json(todos);
  })
);

router.get(
  '/:id',
  asyncWrapper(async (req, res) => {
    const todo = todosServices.findOne(req.params.id);
    res.json(todo);
  })
);

router.post(
  '/',
  asyncWrapper(async (req, res) => {
    const todo = req.body;
    const createdTodo = todosServices.create(todo);
    res.json(createdTodo);
  })
);

router.put(
  '/:id',
  asyncWrapper(async (req, res) => {
    const todo = req.body;
    const updatedTodo = todosServices.update(req.params.id, todo);
    res.json(updatedTodo);
  })
);

router.delete(
  '/:id',
  asyncWrapper(async (req, res) => {
    todosServices.delete(req.params.id);
    res.status(200).end();
  })
);

module.exports = router;
