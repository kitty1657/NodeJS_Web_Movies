'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('director', [
			{
				name: 'Vu Trung Trung',
				birthdate: '19-06-1978',
				nationality: 'Đài Loan',
				biography:
					"Yu Zhong Zhong is a Taiwanese director. His main cinematic work is 'Go! Go! G-Boys'. His main television dramas include 'Love 18' and 'I, My Brother'. His 2015 idol drama 'Marry Me, or Not?' was nominated in six major categories including Best Directing, Best Television Series, Best Leading Actor, Best Leading Actress, Best Supporting Actress, and Best Writing for a Television Series. In 2018, he directed the youth romance drama 'Summer's Desire'.",
				image:
					'pic6.iqiyipic.com/image/20201021/b3/df/p_1013420_m_601_m2_300_300.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {},
};
