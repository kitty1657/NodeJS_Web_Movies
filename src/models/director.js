"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Director extends Model {
		static associate(models) {}
	}
	Director.init(
		{
            Name: DataTypes.STRING,
            BirthDate: DataTypes.DATEONLY,
            Nationality: DataTypes.STRING,
            Biography: DataTypes.STRING,
            ImageURL: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "Director",
		}
	);
	return Director;
};
