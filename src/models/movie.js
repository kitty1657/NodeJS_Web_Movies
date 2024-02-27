"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		static associate(models) {
			// * Mối quan hệ 1 - 1 giữa movie và user rating
			Movie.hasOne(models.Rating, {
				foreignKey: 'movieID', 
				as: 'movieRating' 
			});

			// * Mối quan hệ 1 - n giữa movie và movie genre 
			Movie.belongsToMany(models.Genre, {
				through: "moviegenre",
				foreignKey: "movieID",
			});

			Movie.belongsToMany(models.MovieDirector,{
				through: 'moviedirector',
				foreignKey:'movieID'
			})

			Movie.hasOne(models.Country,{
				foreignKey:"countryID",
				as:'countryData'
			})

			Movie.belongsToMany(models.MovieActor,{
				through: 'movieactor',
				foreignKey:'movieID'
			})
		}
	}
	Movie.init(
		{
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            ratingID: DataTypes.INTEGER,
            countryID: DataTypes.INTEGER,
            release: DataTypes.DATEONLY,
			duration: DataTypes.INTEGER,
            thumbnail: DataTypes.STRING,
            videoURL : DataTypes.STRING,
            html: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "movie",
			tableName: 'movie'
		}
	);
	return Movie;
};
