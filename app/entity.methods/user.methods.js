const errorFactory = require('../errors/errorFactory');
const roleEnum = require('../enums/roleEnum');

const find = db => {
  const query = `
  SELECT
    user.id AS id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login
  FROM user
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Users not found`),
        );
      }

      return Promise.resolve(result);
    });
};

const get = (db, userId = 0) => {
  const query = `
  SELECT
    user.id AS id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login,
    user.role AS role
  FROM user
  WHERE user.id = :userId
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        userId,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`User not found`),
        );
      }

      return Promise.resolve(result[0]);
    });
};

const getForAuth = (db, userLogin = '') => {
  const query = `
  SELECT
    user.id AS id,
    user.login AS login,
    user.password AS password
  FROM user
  WHERE user.login = :userLogin
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        userLogin,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotAuthenticatedError(`Wrong login or password.`),
        );
      }

      return Promise.resolve(result[0]);
    });
};

module.exports = {
  find,
  get,
  getForAuth,
};
