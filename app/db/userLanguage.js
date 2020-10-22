module.exports = function(sequelize, DataTypes) {
  const userLanguage = sequelize.define('userLanguage', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: 'id',
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    },        
    languageId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'language',
        key: 'id'
      },
      field: 'language_id'
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
    tableName: 'user_language',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdDateTime',
    updatedAt: 'lastModifiedDateTime',
  });

  userLanguage.associate = models => {
    userLanguage.belongsTo(models.user, { foreignKey: 'userId' });
    userLanguage.belongsTo(models.language, { foreignKey: 'languageId' });
  };

  return userLanguage;
};
