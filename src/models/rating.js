"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Rating extends Model {
		static associate(models) {
			// * Mối quan hệ 1 - 1 giữa movie và rating
			Rating.belongsTo(models.Movie, {
				foreignKey: 'movieID', 
				as: 'movieRating'
			});
		}
	}
	Rating.init(
		{
            movieID: DataTypes.INTEGER,
            rating: DataTypes.FLOAT,
            ratingdate: DataTypes.DATEONLY
        },
		{
			sequelize,
			modelName: "rating",
			tableName: 'rating'
		}
	);
	return Rating;
};
