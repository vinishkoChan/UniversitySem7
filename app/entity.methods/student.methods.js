const errorFactory = require('../errors/errorFactory');
const roleEnum = require('../enums/roleEnum');

const find = db => {
  const query = `
  SELECT
    user.id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login
  FROM user
  WHERE user.role = :studentRole
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        studentRole: roleEnum.STUDENT.key,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Students not found`),
        );
      }

      return Promise.resolve(result);
    });
};

module.exports = {
  find,
};
