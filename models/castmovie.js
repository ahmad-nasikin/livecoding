'use strict';
module.exports = function(sequelize, DataTypes) {
  var CastMovie = sequelize.define('CastMovie', {
    CastId: DataTypes.INTEGER,
    Movie: DataTypes.INTEGER,
    role: DataTypes.STRING
  });
      CastMovie.associate = model => {
        CastMovie.belongsTo(models.Cast);
        CastMovie.belongsTo(models.Movie);
      };
      return CastMovie;
};
