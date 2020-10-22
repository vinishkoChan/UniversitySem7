'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('task',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          field: 'id',
        },
        programId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: 'program',
            key: 'id'
          },
          field: 'program_id'
        },           
        topic: {
          type: Sequelize.STRING(255),
          allowNull: false,
          field: 'topic'
        },      
        description: {
          type: Sequelize.STRING(255),
          allowNull: true,
          field: 'description'
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
    return queryInterface.dropTable('task');
  }
};
