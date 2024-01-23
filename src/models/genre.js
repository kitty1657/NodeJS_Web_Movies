"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Genre extends Model {
		static associate(models) {}
	}
	Genre.init(
		{
            Name: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "Genre",
		}
	);
	return Genre;
};
