const router = require('express').Router();
const asyncWrapper = require('../utils/asyncWrapper');
const UsersService = require('../services/users');
const usersServices = new UsersService();

router.get(
  '/',
  asyncWrapper(async (req, res) => {
    const users = usersServices.findAll();
    res.json(users);
  })
);

router.get(
  '/:id',
  asyncWrapper(async (req, res) => {
    console.log(`getting user with id ${req.params.id}`);
    const user = usersServices.findOne(req.params.id);
    res.json(user);
  })
);

router.post(
  '/',
  asyncWrapper(async (req, res) => {
    const user = req.body;
    const createdUser = usersServices.create(user);
    res.json(createdUser);
  })
);

router.put(
  '/:id',
  asyncWrapper(async (req, res) => {
    console.log(`updating user with id ${req.params.id}`);
    const user = req.body;
    const updatedUser = usersServices.update(req.params.id, user);
    res.json(updatedUser);
  })
);

router.delete(
  '/:id',
  asyncWrapper(async (req, res) => {
    console.log(`deleting user with id ${req.params.id}`);
    usersServices.delete(req.params.id);
    res.status(200).end();
  })
);

module.exports = router;
