const dotenv = require('dotenv');

const feathers = require('feathers');
const errorHandler = require('feathers-errors/handler');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const services = require('./services');
const appHooks = require('./app.hooks');

dotenv.config();

const app = feathers();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(configuration())
  .configure(hooks())
  .configure(rest())
  .configure(services);

app.hooks(appHooks);

app.use(errorHandler());

module.exports = app;