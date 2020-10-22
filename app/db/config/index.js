const Sequelize = require('sequelize');
const env = require('../../env');

const config = {
  database: env.DATABASE,
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
  dialect: 'mysql',
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;