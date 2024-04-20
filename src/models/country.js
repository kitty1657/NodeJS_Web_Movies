'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Country extends Model {
		static associate(models) {}
	}
	Country.init(
		{
			countryID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			countryName: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'country',
			tableName: 'country',
		}
	);
	return Country;
};
