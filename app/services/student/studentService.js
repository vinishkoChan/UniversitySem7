class StudentService {
  constructor(db) {
    this.db = db;
  }
  
  async find(params) {
    console.log('asd');
    return { hello: 'Hi' };
  }
}

module.exports = db => new StudentService(db);