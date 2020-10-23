const userMethods = require('../../entity.methods/user.methods');
const programMethods = require('../../entity.methods/program.methods');

const roleEnum = require('../../enums/roleEnum');
const errorFactory = require('../../errors/errorFactory');

class ProgramService {
  constructor(db) {
    this.db = db;
  }

  async find(req) {
    const user = await userMethods.get(this.db, req.user.id);

    if (user.role === roleEnum.TEACHER.key) {
      return programMethods.findByTeacher(this.db, req.user.id);
    } else if (user.role === roleEnum.STUDENT.key) {
      return programMethods.findByStudent(this.db, req.user.id);
    }

    return errorFactory.createNotFoundError('Undefined user role.');
  }

  async get(id, data) {
    const program = await programMethods.get(this.db, id);

    if (
      program.teacherId === data.user.id ||
      program.studentId === data.user.id
    ) {
      return program;
    }

    return errorFactory.createNotFoundError(`Program with id = ${id} not found.`);
  }

  async create(data, req) {
    const me = await userMethods.get(this.db, req.user.id);
    const secondUser = await userMethods.get(this.db, data.studentId);

    if (me.role !== roleEnum.TEACHER.key) {
      return errorFactory.createMethodNotAllowedError('Only teacher can create the program.');
    }
    if (me.role === secondUser.role) {
      return errorFactory.createBadRequestError('Program can be created only between teacher and student.');
    }

    const createData = {
      teacherId: req.user.id,
      studentId: data.studentId,
    }

    return programMethods.create(this.db, createData);
  }
}

module.exports = db => new ProgramService(db);
