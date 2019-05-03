const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const custom = require('./customMiddleware');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(morgan('common'));
  app.use(cors());
  app.use(helmet());
  app.use(custom);
};
