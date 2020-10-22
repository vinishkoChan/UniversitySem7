'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teacher_language',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          field: 'id',
        },
        teacherId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: 'teacher',
            key: 'id'
          },
          field: 'teacher_id'
        },        
        languageId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: 'language',
            key: 'id'
          },
          field: 'language_id'
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
    return queryInterface.dropTable('teacher_language');
  }
};
