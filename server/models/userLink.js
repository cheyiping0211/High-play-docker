/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLink', {
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    musicId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'userLink'
  });
};
