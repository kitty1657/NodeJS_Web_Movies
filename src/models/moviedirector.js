"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieDirector extends Model {
		static associate(models) {
			
		}
	}
	MovieDirector.init(
		{
            movieID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
            directorID: DataTypes.INTEGER
        },
		{
			sequelize,
			modelName: "moviedirector",
			tableName: 'moviedirector'
		}
	);
	return MovieDirector;
};
