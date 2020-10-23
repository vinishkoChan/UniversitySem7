const authBefore = require('../../auth/hooks/before.methods');
const beforeMethods = require('./before.methods');

module.exports = {
  before: {
    all: [authBefore.processToken],
    find: [],
    get: [],
    create: [beforeMethods.validateRequest],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
