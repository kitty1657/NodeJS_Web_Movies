"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("moviegenre", {
			movieID: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			genreID: {
				allowNull: false,
				type: Sequelize.INTEGER,
				
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
		await queryInterface.dropTable("moviegenre");
	},
};
