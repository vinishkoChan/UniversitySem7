const errorFactory = require('../errors/errorFactory');

const findByTeacher = (db, teacherId = 0) => {
  const query = `
  SELECT
    program.id AS id,
    program.teacher_id as teacherId,
    program.student_id as studentId
  FROM program
  WHERE program.teacher_id = :teacherId
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        teacherId,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Programs not found`),
        );
      }

      return Promise.resolve(result);
    });
};

const findByStudent = (db, studentId = 0) => {
  const query = `
  SELECT
    program.id AS id,
    program.teacher_id as teacherId,
    program.student_id as studentId
  FROM program
  WHERE program.student_id = :studentId
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        studentId,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Programs not found`),
        );
      }

      return Promise.resolve(result);
    });
};

const get = (db, id = 0) => {
  const query = `
  (SELECT
    'program' AS source,
    program.id AS id,
    program.teacher_id AS teacherId,
    program.student_id AS studentId,
    NULL AS topic,
    NULL AS description
  FROM program
  WHERE program.id = :id)
  UNION ALL
  (SELECT
    'task' AS source,
    task.id AS id,
    NULL AS teacherId,
    NULL AS studentId,
    task.topic AS topic,
    task.description AS description
  FROM task
  WHERE task.program_id = :id
    )
  `;

  return db.sequelize
    .query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        id,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Program with id = ${id} not found`),
        );
      }

      const program = result.find(record => record.source === 'program');
      program.tasks = result.filter(record => record.source === 'task');

      return Promise.resolve(program);
    });
};

module.exports = {
  findByTeacher,
  findByStudent,
  get,
};
