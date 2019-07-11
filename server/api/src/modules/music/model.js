/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let Music = sequelize.define('music', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    link: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    artist: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
      tableName: 'music',
      timestamps: false,
    });

  Music.associate = function (models) {
    Music.hasMany(models.UserLikes)
  }

  return Music;
};
