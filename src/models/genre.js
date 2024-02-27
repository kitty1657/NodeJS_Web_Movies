"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Genre extends Model {
		static associate(models) {
			// * Mối quan hệ 1 - n giữa genre và movie genre 
			
		}
	}
	Genre.init(
		{
            name: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "genre",
			tableName: 'genre'
		}
	);
	return Genre;
};
