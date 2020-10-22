const teacherMethods = require('../../entity.methods/teacher.methods');

class TeacherService {
  constructor(db) {
    this.db = db;
  }

  async get(id) {
    return teacherMethods.findTeacherDetails(this.db, id);
  }

  async find() {
    return teacherMethods.findAllTeachers(this.db);
  }
}

module.exports = db => new TeacherService(db);
