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

const get = (db, userId) => {
  const query = `
  SELECT
    user.id AS id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login
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

module.exports = {
  find,
  get,
};
