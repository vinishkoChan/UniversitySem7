const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const services = require('./services');
const appHooks = require('./app.hooks');

const app = express(feathers());

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.text())
  // .configure(configuration())
  .configure(express.rest())
  .configure(services);

app.hooks(appHooks);

app.use(express.errorHandler());

module.exports = app;