const errorFactory = require('../errors/errorFactory');

const findTeacherDetails = (db, teacherId) => {
  const query = `
  (SELECT
    'user' AS source,
    teacher.id AS id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login,
    NULL AS language
  FROM teacher
  JOIN user 
    ON user.id = teacher.user_id
  WHERE teacher.id = :teacherId
  )
  UNION ALL
  (SELECT
    'language' AS source,  
    teacher.id AS id,
    NULL AS firstName,
    NULL AS lastName,
    NULL AS login,
    language.name AS language
  FROM teacher
  JOIN teacher_language AS tl
    ON tl.teacher_id = teacher.id
  JOIN language
    ON language.id = tl.language_id
  WHERE teacher.id = :teacherId
  )
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        teacherId,
      },
    })
    .then(result => {
      if (result.length === 0) {
        return Promise.reject(
          errorFactory.createNotFoundError(
            `Teacher with id ${teacherId} not found`,
          ),
        );
      }

      return {
        teachers: result.filter(record => record.source === 'user'),
        languages: result.filter(record => record.source === 'language')
      };
    });
};

const findAllTeachers = db => {
  const query = `
  (SELECT
    'user' AS source,
    teacher.id AS id,
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login,
    NULL AS language
  FROM teacher
  JOIN user 
    ON user.id = teacher.user_id
  )
  UNION ALL
  (SELECT
    'language' AS source,  
    teacher.id AS id,
    NULL AS firstName,
    NULL AS lastName,
    NULL AS login,
    language.name AS language
  FROM teacher
  JOIN teacher_language AS tl
    ON tl.teacher_id = teacher.id
  JOIN language
    ON language.id = tl.language_id
  )
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then(result => {
      if (result.length === 0) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Teachers not found`),
        );
      }

      return {
        teachers: result.filter(record => record.source === 'user'),
        languages: result.filter(record => record.source === 'language')
      };
    });
};

module.exports = {
  findTeacherDetails,
  findAllTeachers,
};
