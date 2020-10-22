const hooks = require('./hooks');
const service = require('./teacherService');

const url = '/teacher';

module.exports = function () {
  const app = this;

  app.use(url, service(app.db));

  const teacherService = app.service(url);

  if (teacherService.hooks) {
    teacherService.hooks(hooks);
  }
};
