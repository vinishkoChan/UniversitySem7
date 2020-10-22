'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          field: 'id',
        },
        markForDelete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
          field: 'mark_for_delete',
        },
        createdDateTime: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'created_date_time',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        lastModifiedDateTime: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'last_modified_date_time',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
      {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
      }
    );
  },

  down: queryInterface => {
    return queryInterface.dropTable('user');
  }
};
