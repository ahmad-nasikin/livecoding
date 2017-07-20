'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  });

  Movie.associate = models => {
    Movie.belongsToMany(models.Cast, { through :
    'CastMovie'
    });
  }
  return Movie;
};
