"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Tạo bảng User
		await queryInterface.createTable("user", {
			userID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			fullname: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			gender: {
				type: Sequelize.BOOLEAN,
			},
			phonenumber: {
				type: Sequelize.STRING,
			},
			roleID: {
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
		// Xóa bảng User và khóa ngoại
		await queryInterface.dropTable("user");
	},
};
