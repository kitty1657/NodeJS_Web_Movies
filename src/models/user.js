"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			UserID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			Email: DataTypes.STRING,
			Password: DataTypes.STRING,
			FullName: DataTypes.STRING,
			Gender: DataTypes.BOOLEAN,
			PhoneNumber: DataTypes.STRING,
			RoleID: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "User",
			tableName:"User"
		}
	);
	return User;
};
