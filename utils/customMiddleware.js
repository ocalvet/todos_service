const customMiddleware = (req, res, next) => {
  console.log('A custom middleware');
  next();
};

module.exports = customMiddleware;
