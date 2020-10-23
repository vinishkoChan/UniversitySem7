const { hooks } = require('./hooks');
const service = require('./authService');

const url = '/auth';

let authService;
function config() {
  const app = this;

  app.use(url, service(app.db));

  authService = app.service(url);

  if (authService.hooks) {
    authService.hooks(hooks);
  }
}

module.exports = {
  config,
  service: authService,
};
