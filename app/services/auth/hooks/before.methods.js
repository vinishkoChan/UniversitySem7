const get = require('lodash.get');
const jwt = require('jsonwebtoken');

const errorFactory = require('../../../errors/errorFactory');

const env = require('../../../env');

const processToken = (hook) => {
  const token = get(hook.params.headers, 'authorization', null);

  if (!token) {
    return Promise.reject(errorFactory.createNotAuthenticatedError('JWT required.'))
  }

  let payload;
  try {
    payload = jwt.verify(token, env.TOKEN_SECRET);
  } catch(e) {
    return Promise.reject(errorFactory.createNotAuthenticatedError(`Bad token: ${e.message}`))
  }

  hook.params.user = {
    id: payload.userId,
  }

  return Promise.resolve(hook);
}

module.exports = {
  processToken,
}