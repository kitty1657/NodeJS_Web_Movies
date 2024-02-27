"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Actor extends Model {
		static associate(models) {
			Actor.belongsToMany(models.MovieActor,{
				through: 'movieactor',
				foreignKey:'actorID'
			})
		}
	}
	Actor.init(
		{
            name: DataTypes.STRING,
            birthdate: DataTypes.DATEONLY,
            nationality: DataTypes.STRING,
            biography: DataTypes.STRING,
            imageURL: DataTypes.STRING
        },
		{
			sequelize,
			modelName: "actor",
			tableName: 'actor'
		}
	);
	return Actor;
};
