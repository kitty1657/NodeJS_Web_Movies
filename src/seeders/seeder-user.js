"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("User", [
			{
				Email: "bach112003@gamil.com",
				Password: "bach112003",
				FullName: "Trần Việt Bách",
				Address: "Hà Đông",
				Gender: 1,
				PhoneNumber: "0346331968",
				RoleID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
