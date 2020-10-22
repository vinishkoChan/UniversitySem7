class StudentService {
  constructor(db) {
    this.db = db;
  }
  
  async find(params) {
    return { hello: 'Hi' };
  }
}

module.exports = db => new StudentService(db);