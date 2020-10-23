const jwt = require('jsonwebtoken');

const userMethods = require('../../entity.methods/user.methods');
const errorFactory = require('../../errors/errorFactory');

const env = require('../../env');

class AuthService {
  constructor(db) {
    this.db = db;
  }

  async create(data) {
    if (data.login && data.password) {
      const user = await userMethods.getForAuth(this.db, data.login);
      
      if (user) {
        if (user.password === data.password) {
          const accessToken = jwt.sign({userId: user.id}, env.TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: env.TOKEN_LIVE
          });

          return {
            token: accessToken,
          }
        }
      }
    }

    return errorFactory.createNotAuthenticatedError(`Wrong login or password.`);
  }
}

module.exports = db => new AuthService(db);
