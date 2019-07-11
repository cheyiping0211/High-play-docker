/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
      tableName: 'users',
      timestamps: false
    });

  User.associate = function (models) {
    User.hasMany(models.UserLikes)
  }

  return User;
};
