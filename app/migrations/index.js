const Umzug = require('umzug');
const sequelize = require('./../db/config');

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize,
    tableName: '__migration'
  },

  migrations: {
    params: [
      sequelize.getQueryInterface(), // queryInterface
      sequelize.constructor, // DataTypes
      function() {
        throw new Error(
          'Migration tried to use old style \'done\' callback. Please upgrade to \'umzug\' and return a promise instead.'
        );
      }
    ],
    path: './app/migrations',
    pattern: /^((?!index)).*\.js$/
  },

  logging: function() {
    console.log.apply(null, arguments);
  }
});

module.exports = {
  migrate: function() {
    return umzug.up();
  },
  umzug
};
