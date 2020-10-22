module.exports = function(sequelize, DataTypes) {
  const task = sequelize.define('task', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: 'id',
    },
    programId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'program',
        key: 'id'
      },
      field: 'program_id'
    },           
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'topic'
    },      
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'description'
    }, 
    createdDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_date_time',
      defaultValue: DataTypes.NOW,
    },
    lastModifiedDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'last_modified_date_time',
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'task',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdDateTime',
    updatedAt: 'lastModifiedDateTime',
  });

  task.associate = models => {
    task.belongsTo(models.program, { foreignKey: 'programId' });
  };

  return task;
};
