'use strict';

const { NotFound } = require('@feathersjs/errors');

module.exports.createNotFoundError = error => {
  const newError = new NotFound(error);
  newError.stack = error.stack;

  return newError;
};
