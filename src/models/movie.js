"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		static associate(models) {
			
		}
	}
	Movie.init(
		{
			movieID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            countryID: DataTypes.INTEGER,
            release: DataTypes.DATEONLY,
			duration: DataTypes.INTEGER,
            thumbnail: DataTypes.STRING,
            videoURL : DataTypes.STRING,
            html: DataTypes.STRING,
			background: DataTypes.TEXT('long'),
			imdb: DataTypes.FLOAT
        },
		{
			sequelize,
			modelName: "movie",
			tableName: 'movie'
		}
	);
	return Movie;
};
