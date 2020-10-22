const db = require('./../db');
const student = require('./student');
const teacher = require('./teacher');

module.exports = function () {
  const app = this;
  app.configure(db);
  app.configure(student);
  app.configure(teacher);
};
