const Sequelize = require('sequelize');

const config = {
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: 'mysql',
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;