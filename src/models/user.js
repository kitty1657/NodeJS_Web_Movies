"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {}
	}
	User.init(
		{
			userID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			fullName: DataTypes.STRING,
			address: DataTypes.STRING,
			gender: DataTypes.BOOLEAN,
			phoneNumber: DataTypes.STRING,
			roleID: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "user",
			tableName: "user",
		}
	);
	return User;
};
