const db = require('./../db');

module.exports = function () {
  const app = this;
  app.configure(db);
}