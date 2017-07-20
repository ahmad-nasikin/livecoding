'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cast = sequelize.define('Cast', {
    firt_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  });
      Cast.associate = models => {
        Cast.belongsToMany(models.Movie, { through :
        'CastMovie'
        });
      }
  return Cast;
};
