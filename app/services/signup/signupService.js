const userMethods = require('../../entity.methods/user.methods');

const errorFactory = require('../../errors/errorFactory');

class SignupService {
  constructor(db) {
    this.db = db;
  }

  async create(data) {
    const user = await userMethods.getUserByLogin(this.db, data.login);

    if (user) {
      return errorFactory.createBadRequestError('Login already in use.');
    }

    return userMethods.create(this.db, data);
  }
}

module.exports = db => new SignupService(db);
