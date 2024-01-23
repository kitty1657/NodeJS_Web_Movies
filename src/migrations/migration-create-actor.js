"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Actor", {
			ActorID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			Name: {
				type: Sequelize.STRING,
			},
			BirthDate: {
				type: Sequelize.INTEGER,
			},
			Nationality: {
				type: Sequelize.FLOAT,
			},
			Biography: {
				type: Sequelize.INTEGER,
			},
			ImangeURL: {
				type: Sequelize.DATEONLY,
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
		await queryInterface.dropTable("Actor");
	},
};
