/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLinks', {
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
};
