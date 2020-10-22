const hooks = require('./hooks');
const service = require('./studentService');

module.exports = function () {
  const app = this;
  const url = '/stud';

  app.use(url, service(app.db));

  const studentService = app.service(url);

  if (studentService.hooks) {
    studentService.hooks(hooks);
  }
};
