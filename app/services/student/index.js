const hooks = require('./hooks');
const service = require('./studentService');

const url = '/students';

module.exports = function () {
  const app = this;

  app.use(url, service(app.db));

  const studentService = app.service(url);

  if (studentService.hooks) {
    studentService.hooks(hooks);
  }
};
