module.exports = function(sequelize, DataTypes) {
  const language = sequelize.define('language', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'name'
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
    tableName: 'language',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdDateTime',
    updatedAt: 'lastModifiedDateTime',
  });

  return language;
};
