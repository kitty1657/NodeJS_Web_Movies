"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MovieDirector extends Model {
		static associate(models) {
			MovieDirector.belongsTo(models.Movie,{
				foreignKey:'movieID'
			})
			MovieDirector.belongsTo(models.Director,{
				foreignKey: 'directorID'
			})
		}
	}
	MovieDirector.init(
		{
            movieID: DataTypes.INTEGER,
            directorID: DataTypes.INTEGER
        },
		{
			sequelize,
			modelName: "moviedirector",
			tableName: 'moviedirector'
		}
	);
	return MovieDirector;
};
