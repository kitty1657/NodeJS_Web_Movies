"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Commnet", {
			CommentID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			MovieID: {
				type: Sequelize.INTEGER,
			},
			UserID: {
				type: Sequelize.INTEGER,
			},
            UserName: {
				type: Sequelize.STRING,
			},
			Content: {
				type: Sequelize.STRING,
			},
			CommentDate: {
				type: Sequelize.DATE,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Commnet");
	},
};
