const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  AUTO_MIGRATE: process.env.AUTO_MIGRATE,
  DATABASE: process.env.DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  APP_PORT: process.env.APP_PORT,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  TOKEN_LIVE: process.env.TOKEN_LIVE,
}