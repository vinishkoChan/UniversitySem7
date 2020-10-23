'use strict';

const { NotFound, NotAuthenticated } = require('@feathersjs/errors');

module.exports.createNotFoundError = error => {
  const newError = new NotFound(error);
  newError.stack = error.stack;

  return newError;
};

module.exports.createNotAuthenticatedError = error => {
  const newError = new NotAuthenticated(error);
  newError.stack = error.stack;

  return newError;
};
