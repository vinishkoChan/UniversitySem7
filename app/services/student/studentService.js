const studentMethods = require('../../entity.methods/student.methods');

class StudentService {
  constructor(db) {
    this.db = db;
  }

  async find() {
    return studentMethods.find(this.db);
  }
}

module.exports = db => new StudentService(db);
