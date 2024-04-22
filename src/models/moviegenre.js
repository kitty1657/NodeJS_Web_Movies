"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieGenre extends Model {
		static associate(models) {
			
		}
	}
	MovieGenre.init(
		{
            movieID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
            genreID: DataTypes.INTEGER
        },
		{
			sequelize,
			modelName: "moviegenre",
			tableName: 'moviegenre'
		}
	);
	return MovieGenre;
};
