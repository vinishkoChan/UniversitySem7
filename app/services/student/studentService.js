const studentMethods = require('../../entity.methods/student.methods');

class StudentService {
  constructor(db) {
    this.db = db;
  }

  async get(id) {
    return studentMethods.findStudentDetails(this.db, id);
  }

  async find() {
    return studentMethods.findAllStudents(this.db);
  }
}

module.exports = db => new StudentService(db);
