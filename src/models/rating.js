"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Rating extends Model {
		static associate(models) {
			
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
