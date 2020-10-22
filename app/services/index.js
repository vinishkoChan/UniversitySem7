const db = require('./../db');
const student = require('./student');
const teacher = require('./teacher');
const user = require('./user');

module.exports = function () {
  const app = this;
  app.configure(db);
  app.configure(student);
  app.configure(teacher);
  app.configure(user);
};
