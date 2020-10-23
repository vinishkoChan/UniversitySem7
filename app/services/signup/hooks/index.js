const beforeMethods = require('./before.methods');
const afterMethods = require('./after.methods');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [beforeMethods.validateRequest, beforeMethods.hydrateRequest],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [afterMethods.hydrateResponse],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
