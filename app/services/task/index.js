const hooks = require('./hooks');
const service = require('./taskService');

const url = '/tasks';

module.exports = function () {
  const app = this;

  app.use(url, service(app.db));

  const taskService = app.service(url);

  if (taskService.hooks) {
    taskService.hooks(hooks);
  }
};
