const errorFactory = require('../errors/errorFactory');

const findStudentDetails = (db, studentId) => {
  const query = `
  SELECT
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login
  FROM student
  JOIN user 
    ON user.id = student.user_id
  WHERE student.id = :studentId;
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        studentId,
      },
    })
    .then(result => {
      if (result.length === 0) {
        return Promise.reject(
          errorFactory.createNotFoundError(
            `Student with id ${studentId} not found`,
          ),
        );
      }

      return Promise.resolve(result[0]);
    });
};

const findAllStudents = db => {
  const query = `
  SELECT
	  user.first_name AS firstName,
    user.last_name AS lastName,
    user.login AS login
  FROM student
  JOIN user 
    ON user.id = student.user_id
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then(result => {
      if (result.length === 0) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Students not found`),
        );
      }

      return Promise.resolve(result);
    });
};

module.exports = {
  findStudentDetails,
  findAllStudents,
};
