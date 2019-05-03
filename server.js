const app = require('express')();
const env = require('dotenv');
const middleware = require('./utils/middleware');
const errorHandling = require('./utils/errorHandling');
const dbconfig = require('./utils/dbconfig')();
const TodosService = require('./services/todos');
const todosControllerCreator = require('./controllers/todos');

env.config();
const port = process.env.APP_PORT || 6000;
// Middleware
middleware(app);
// Setup dependencies
const todosService = new TodosService(dbconfig.db);
const todosController = todosControllerCreator(todosService);
// Controllers
app.use('/api/todos', todosController);
// Error Handling
errorHandling(app);
// Start App
app.listen(port, () => console.log(`Listening on ${port}`));
