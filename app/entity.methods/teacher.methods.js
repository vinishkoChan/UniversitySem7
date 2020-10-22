const errorFactory = require('../errors/errorFactory');
const roleEnum = require('../enums/roleEnum');

const find = db => {
  const query = `
  (SELECT
    'user' AS source,
    user.id AS id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login,
    NULL AS language
  FROM user 
  WHERE user.role = :teacherRole
  )
  UNION ALL
  (SELECT
    'language' AS source,  
    user.id AS id,
    NULL AS firstName,
    NULL AS lastName,
    NULL AS login,
    language.name AS language
  FROM user
  JOIN user_language AS ul
    ON ul.user_id = user.id
  JOIN language
    ON language.id = ul.language_id
  )
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        teacherRole: roleEnum.TEACHER.key,
      },
    })
    .then(result => {
      if (result.length === 0) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Teachers not found`),
        );
      }

      return {
        teachers: result.filter(record => record.source === 'user'),
        languages: result.filter(record => record.source === 'language'),
      };
    });
};

module.exports = {
  find,
};
