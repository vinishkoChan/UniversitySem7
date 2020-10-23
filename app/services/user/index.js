const hooks = require('./hooks');
const service = require('./userService');

const url = '/users';

module.exports = function () {
  const app = this;

  app.use(url, service(app.db));

  const userService = app.service(url);

  if (userService.hooks) {
    userService.hooks(hooks(app));
  }
};
