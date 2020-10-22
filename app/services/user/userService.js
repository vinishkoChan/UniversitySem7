const userMethods = require('../../entity.methods/user.methods');

class UserService {
  constructor(db) {
    this.db = db;
  }

  async get(id) {
    return userMethods.get(this.db, id);
  }

  async find() {
    return userMethods.find(this.db);
  }
}

module.exports = db => new UserService(db);
