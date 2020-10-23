const errorFactory = require('../../../errors/errorFactory');

const validateRequest = (hook) => {
  const { data } = hook;

  if (!data.programId) {
    return Promise.reject(errorFactory.createBadRequestError('Program id required.'));
  }
  if (!data.topic) {
    return Promise.reject(errorFactory.createBadRequestError('Topic required.'));
  }

  return Promise.resolve(hook);
}

const hydrateRequest = (hook) => {
  return Promise.resolve(hook);
}

module.exports = {
  validateRequest,
  hydrateRequest
}