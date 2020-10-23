const hooks = require('./hooks');
const service = require('./signupService');

const url = '/signup';

module.exports = function() {
  const app = this;

  app.use(url, service(app.db));

  const signupService = app.service(url);

  if (signupService.hooks) {
    signupService.hooks(hooks);
  }
}
