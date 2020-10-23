module.exports = app => {
  const auth = app.service('/auth');

  return {
    before: {
      all: [auth.authenticate],
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
};
