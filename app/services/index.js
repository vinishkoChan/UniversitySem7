const db = require('./../db');
const student = require('./student');
const teacher = require('./teacher');
const user = require('./user');
const auth = require('./auth');

module.exports = function () {
  const app = this;
  app.configure(db);
  app.configure(auth);
  app.configure(student);
  app.configure(teacher);
  app.configure(user);
};
