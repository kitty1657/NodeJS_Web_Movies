"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		static associate(models) {}
	}
	Movie.init(
		{
            Title: DataTypes.STRING,
            GenreID: DataTypes.INT,
            Description: DataTypes.STRING,
            Rating: DataTypes.FLOAT,
            CountryID: DataTypes.INT,
            Release: DataTypes.DATEONLY,
			Duration: DataTypes.INTEGER,
            Thumbnail: DataTypes.STRING,
            VideoURL : DataTypes.STRING,
            Html: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "movie",
		}
	);
	return Movie;
};
