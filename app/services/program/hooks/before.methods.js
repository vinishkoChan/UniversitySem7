const errorFactory = require('../../../errors/errorFactory');

const validateRequest = (hook) => {
  const { data } = hook;

  if (!data.studentId) {
    return Promise.reject(errorFactory.createBadRequestError('Student id should be set.'));
  }

  return Promise.resolve(hook);
}

module.exports = {
  validateRequest,
}