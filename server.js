const app = require('express')();
const env = require('dotenv');
const userController = require('./controllers/users');
const middleware = require('./utils/middleware');
const errorHandling = require('./utils/errorHandling');
env.config();
const port = process.env.APP_PORT || 6000;
// Middleware
middleware(app);
// Controllers
app.use('/api/users', userController);
// Error Handling
errorHandling(app);
// Start App
app.listen(port, () => console.log(`Listening on ${port}`));
