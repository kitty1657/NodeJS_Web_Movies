"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieActor extends Model {
		static associate(models) {}
	}
	MovieActor.init(
		{
            MovieID: DataTypes.INTEGER,
            ActorID: DataTypes.INTEGER
        },
		{
			sequelize,
			modelName: "MovieActor",
		}
	);
	return MovieActor;
};
