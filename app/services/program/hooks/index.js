const authBefore = require('../../auth/hooks/before.methods');
const afterMethods = require('./after.methods');

module.exports = {
  before: {
    all: [authBefore.processToken],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [afterMethods.hydrateGetResponse],
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
