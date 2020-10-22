const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const services = require('./services');
const appHooks = require('./app.hooks');
const env = require('./env');

const app = express(feathers());

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.text())
  .configure(express.rest())
  .configure(services)
  .hooks(appHooks)
  .use(express.errorHandler());

module.exports = app;
