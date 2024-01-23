"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Rating extends Model {
		static associate(models) {}
	}
	Rating.init(
		{
            MovieID: DataTypes.INTEGER,
            Rating: DataTypes.FLOAT,
            RatingDate: DataTypes.DATEONLY
        },
		{
			sequelize,
			modelName: "Rating",
		}
	);
	return Rating;
};
