"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate(models) {}
	}
	Comment.init(
		{
            movieID: DataTypes.INTEGER,
            userID: DataTypes.INTEGER,
			userName: DataTypes.STRING,
			content: DataTypes.STRING,
			commentdDate: DataTypes.DATE
        },
		{
			sequelize,
			modelName: "comment",
			tableName: 'comment'
		}
	);
	return Comment;
};
