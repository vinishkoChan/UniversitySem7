module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: 'id',
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'first_name'
    },        
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'last_name'
    },   
    login: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'login'
    },   
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'password'
    },    
    role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'role'
    },
    markForDelete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'mark_for_delete',
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
    tableName: 'user',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdDateTime',
    updatedAt: 'lastModifiedDateTime',
  });

  user.associate = models => {
    user.hasMany(models.program, { foreignKey: 'userId' });
    user.hasMany(models.userLanguage, { foreignKey: 'userId' });
  };

  return user;
};
