'use strict';

const { NotFound, NotAuthenticated, BadRequest, MethodNotAllowed } = require('@feathersjs/errors');

const handleError = (newError, error) => {
  newError.stack = error.stack;

  return newError;
}

module.exports.createNotFoundError = error => {
  return handleError(new NotFound(error), error)
};

module.exports.createNotAuthenticatedError = error => {
  return handleError(new NotAuthenticated(error), error)
};

module.exports.createBadRequestError = error => {
  return handleError(new BadRequest(error), error)
};

module.exports.createMethodNotAllowedError = error => {
  return handleError(new MethodNotAllowed(error), error)
};
