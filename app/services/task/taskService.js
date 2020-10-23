const taskMethods = require('../../entity.methods/task.methods');
const programMethods = require('../../entity.methods/program.methods');
const errorFactory = require('../../errors/errorFactory');

class TaskService {
  constructor(db) {
    this.db = db;
  }

  async get(id, req) {
    const task = await taskMethods.get(this.db, id);
    const program = await programMethods.get(this.db, task.programId);

    if (program.teacherId !== req.user.id && program.studentId !== req.user.id) {
      return errorFactory.createNotFoundError(`Task with id = ${id} not found.`);
    }

    return task;
  }
  
  async create(data, req) {
    const program = await programMethods.get(this.db, data.programId);

    if (program.teacherId !== req.user.id) {
      return errorFactory.createNotFoundError(`Program with id = ${data.programId} not found.`);
    }

    return taskMethods.create(this.db, data);
  }
}

module.exports = db => new TaskService(db);
