/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banner', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'banner'
  });
};
