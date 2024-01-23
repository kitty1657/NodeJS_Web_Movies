"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieGenre extends Model {
		static associate(models) {}
	}
	MovieGenre.init(
		{
            MovieID: DataTypes.INTEGER,
            GenreID: DataTypes.INTEGER
        },
		{
			sequelize,
			modelName: "MovieGenre",
		}
	);
	return MovieGenre;
};
