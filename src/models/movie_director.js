"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieDirector extends Model {
		static associate(models) {}
	}
	MovieDirector.init(
		{
            MovieID: DataTypes.INTEGER,
            DirectorID: DataTypes.INTEGER
        },
		{
			sequelize,
			modelName: "MovieDirector",
		}
	);
	return MovieDirector;
};
