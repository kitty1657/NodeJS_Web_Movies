"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("comment", {
			commentID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			movieID: {
				type: Sequelize.INTEGER,
			},
			userID: {
				type: Sequelize.INTEGER,
			},
            userName: {
				type: Sequelize.STRING,
			},
			content: {
				type: Sequelize.STRING,
			},
			commentDate: {
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
		await queryInterface.dropTable("comment");
	},
};
