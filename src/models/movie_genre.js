"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieGenre extends Model {
		static associate(models) {
			// * Mối quan hệ 1 - n giữa movie và movie genre
			MovieGenre.belongsTo(models.Movie, {
				foreignKey: 'movieID', 
				as: 'movie' 
			});

			// * Mối quan hệ 1 - 1 giữa movie genre và genre 
			MovieGenre.belongsTo(models.Genre, {
				foreignKey: 'genreID', 
				as: 'genre' 
			});
		}
	}
	MovieGenre.init(
		{
            movieID: DataTypes.INTEGER,
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
