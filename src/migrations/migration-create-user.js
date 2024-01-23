"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			UserId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			Email: {
				type: Sequelize.STRING,
			},
			
			FullName: {
				type: Sequelize.STRING,
			},
			Address: {
				type: Sequelize.STRING,
			},
			Gender: {
				type: Sequelize.BOOLEAN,
			},
			PhoneNumber: {
				type: Sequelize.STRING,
			},
			RoleID: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Users");
	},
};
