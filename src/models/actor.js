"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Actor extends Model {
		static associate(models) {
			
		}
	}
	Actor.init(
		{
			actorID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
            name: DataTypes.STRING,
            birthdate: DataTypes.DATEONLY,
            nationality: DataTypes.STRING,
            biography: DataTypes.STRING,
            image: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "actor",
			tableName: 'actor'
		}
	);
	return Actor;
};
