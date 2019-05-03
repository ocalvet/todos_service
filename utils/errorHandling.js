const chalk = require('chalk');
const UnknownError = require('../errors').UnknownError;
const ModelNotFoundError = require('../errors').ModelNotFoundError;

const errorLogger = (err, req, res, next) => {
  if (err.message) {
    console.log(chalk.default.red(err.message));
  }
  if (err.stack) {
    console.log(chalk.default.red(err.stack));
  }
  next(err);
};

const unknownErrorLogger = (err, req, res, next) => {
  if (err instanceof UnknownError) {
    return res.sendStatus(400);
  }
  next();
};

const modelNotFoundErrorLogger = (err, req, res, next) => {
  if (err instanceof ModelNotFoundError) {
    res.status(400);
    return res.send({ error: 'Model not found' });
  }
  next();
};

const genericErrorLogger = (err, req, res, next) => {
  res.sendStatus(500);
  next();
};

module.exports = app => {
  app.use([
    errorLogger,
    unknownErrorLogger,
    modelNotFoundErrorLogger,
    genericErrorLogger
  ]);
};
