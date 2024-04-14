"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieActor extends Model {
		static associate(models) {
			
		}
	}
	MovieActor.init(
		{
			movieID: DataTypes.INTEGER,
			actorID: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "movieactor",
			tableName: 'movieactor'
		}
	);
	return MovieActor;
};
