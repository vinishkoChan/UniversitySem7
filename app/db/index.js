const Sequelize = require('sequelize');
const sequelize = require('./config');

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

module.exports = function () {
  const app = this;
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  fs.readdirSync(__dirname)
    .filter(function (file) {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      );
    })
    .forEach(function (file) {
      const entity = sequelize['import'](path.join(__dirname, file));
      db[entity.name] = entity;
    });

  Object.keys(db).forEach(function (entityName) {
    if (db[entityName].associate) {
      db[entityName].associate(db);
    }
  });

  app.db = db;

  return db;
};
