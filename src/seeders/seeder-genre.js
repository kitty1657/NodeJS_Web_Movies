"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("genre", [
			{
				name: 'Kinh dị',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Phim chiếu rạp',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Chiến tranh',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Hài hước',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Viến tưởng',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Tâm lý - Tình cảm',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Phim lẻ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Phim bộ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Họat hình',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Thần thoại - Cổ trang',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Gia đình',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Võ thuật - Kiếm hiệp',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
            {
				name: 'Hành động',
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