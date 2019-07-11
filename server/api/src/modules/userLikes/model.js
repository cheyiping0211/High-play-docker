/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let UserLikes = sequelize.define('userLinks', {
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    musicId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    }
  }, {
      tableName: 'userLinks'
    });

  UserLikes.associate = function (models) {
    UserLikes.belongsTo(models.User)
    UserLikes.belongsTo(models.Music)
  }

  return UserLikes
};