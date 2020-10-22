const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const authConfig = require('../../../config/auth.json');

const url = '/auth';

module.exports = function () {
  const app = this;
  
  app.set('authentication', authConfig);

  const authService = new AuthenticationService(app);
  authService.register('jwt', new JWTStrategy());

  app.use(url, authService);
};
