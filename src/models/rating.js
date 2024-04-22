"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Rating extends Model {
		static associate(models) {
			
		}
	}
	Rating.init(
		{
			ratingID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
            rating: DataTypes.FLOAT,
        },
		{
			sequelize,
			modelName: "rating",
			tableName: 'rating'
		}
	);
	return Rating;
};
