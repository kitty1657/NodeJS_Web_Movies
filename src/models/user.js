"use strict";
const { Model } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/types/query-types");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			console.log('Associate method in User model is called!');
			// * Mối quan hệ 1 - 1 giữa user và user role 
			User.hasOne(models.UserRole,{
				foreignKey: 'roleID',
				as: 'roleData'
			});
		}
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
