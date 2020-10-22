const db = require('./../db');
const student = require('./student');

module.exports = function () {
  const app = this;
  app.configure(db);
  app.configure(student);
}