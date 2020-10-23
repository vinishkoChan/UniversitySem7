const roleEnum = require('../../../enums/roleEnum');
const errorFactory = require('../../../errors/errorFactory');
const encoder = require('../../../utils/encoder');

const validateRequest = (hook) => {
  const { data } = hook;

  if (!data.firstName) {
    return Promise.reject(errorFactory.createBadRequestError('First name required.'));
  }
  if (!data.lastName) {
    return Promise.reject(errorFactory.createBadRequestError('Last name required.'));
  }
  if (!data.login) {
    return Promise.reject(errorFactory.createBadRequestError('Login required.'));
  }
  if (!data.password) {
    return Promise.reject(errorFactory.createBadRequestError('Password required.'));
  }

  return Promise.resolve(hook);
}

const hydrateRequest = (hook) => {
  const { data } = hook;

  hook.data = {
    firstName: data.firstName,
    lastName: data.lastName,
    login: data.login,
    password: encoder.encode(data.password),
    role: data.isTeacher ? roleEnum.TEACHER.key : roleEnum.STUDENT.key
  }

  return Promise.resolve(hook);
}

module.exports = {
  validateRequest,
  hydrateRequest
}