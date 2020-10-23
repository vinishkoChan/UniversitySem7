const hooks = require('./hooks');
const service = require('./programService');

const url = '/programs';

module.exports = function () {
  const app = this;

  app.use(url, service(app.db));

  const programService = app.service(url);

  if (programService.hooks) {
    programService.hooks(hooks);
  }
};
