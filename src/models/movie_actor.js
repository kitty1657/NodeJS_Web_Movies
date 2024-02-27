"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieActor extends Model {
		static associate(models) {
			MovieActor.belongsTo(models.Movie, {
				foreignKey: "movieID",
			});
			MovieActor.belongsTo(models.Actor, {
				foreignKey: "actorID",
			});
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
