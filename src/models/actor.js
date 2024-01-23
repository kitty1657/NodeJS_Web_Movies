"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Actor extends Model {
		static associate(models) {}
	}
	Actor.init(
		{
            Name: DataTypes.STRING,
            BirthDate: DataTypes.DATEONLY,
            Nationality: DataTypes.STRING,
            Biography: DataTypes.STRING,
            ImageURL: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "Actor",
		}
	);
	return Actor;
};
