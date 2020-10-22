const teacherMethods = require('../../entity.methods/teacher.methods');

class TeacherService {
  constructor(db) {
    this.db = db;
  }
  
  async find() {
    return teacherMethods.find(this.db);
  }
}

module.exports = db => new TeacherService(db);
