'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('student',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          field: 'id',
        },
        userId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          },
          field: 'user_id'
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
    return queryInterface.dropTable('student');
  }
};
