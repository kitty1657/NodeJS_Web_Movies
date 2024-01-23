"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate(models) {}
	}
	Comment.init(
		{
            MovieID: DataTypes.INTEGER,
            UserID: DataTypes.INTEGER,
			UserName: DataTypes.STRING,
			Content: DataTypes.STRING,
			CommentDate: DataTypes.DATE
        },
		{
			sequelize,
			modelName: "Comment",
		}
	);
	return Comment;
};
