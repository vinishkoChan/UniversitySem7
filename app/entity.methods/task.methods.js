const errorFactory = require('../errors/errorFactory');

const findByProgramId = (db, programId = 0) => {
  return db.task
    .findAll({
      where: {
        programId,
      },
    })
    .then(result => {
      if (!result.length) {
        return Promise.reject(
          errorFactory.createNotFoundError(`Task with programId = ${programId} not found`),
        );
      }

      return Promise.resolve(result);
    });
};

const get = (db, id = 0) => {
  return db.task.findByPk(id).then(result => {
    if (!result) {
      return Promise.reject(
        errorFactory.createNotFoundError(`Task with id = ${id} not found`),
      );
    }

    return Promise.resolve(result);
  });
}

const create = (db, taskInfo = {}) => {
  return db.task.create(taskInfo);
}

module.exports = {
  findByProgramId,
  get,
  create
};
