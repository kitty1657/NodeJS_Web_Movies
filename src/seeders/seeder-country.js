"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("country", [
			{
				countryName: 'Hàn Quốc',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				countryName: 'Trung Quốc',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				countryName: 'Âu Mỹ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				countryName: 'Nhật Bản',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				countryName: 'Thái Lan',
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