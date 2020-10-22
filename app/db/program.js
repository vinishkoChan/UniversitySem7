module.exports = function(sequelize, DataTypes) {
  const program = sequelize.define('program', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: 'id',
    },
    teacherId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'teacher_id'
    },        
    studentId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'student_id'
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
    tableName: 'program',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdDateTime',
    updatedAt: 'lastModifiedDateTime',
  });

  program.associate = models => {
    program.belongsTo(models.user, { foreignKey: 'teacherId' });
    program.belongsTo(models.user, { foreignKey: 'studentId' });
  };

  return program;
};
