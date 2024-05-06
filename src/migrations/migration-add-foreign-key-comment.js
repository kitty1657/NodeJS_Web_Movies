'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('comment', {
			fields: ['movieID'],
			type: 'foreign key',
			name: 'fk_movie_comment',
			references: {
				table: 'movie',
				field: 'movieID',
			},
		});
		await queryInterface.addConstraint('comment', {
			fields: ['userID'],
			type: 'foreign key',
			name: 'fk_user_comment',
			references: {
				table: 'user',
				field: 'userID',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('comment', {
			fields: ['movieID'],
			type: 'foreign key',
			name: 'fk_movie_comment',
			references: {
				table: 'movie',
				field: 'movieID',
			},
		});
		await queryInterface.removeConstraint('comment', {
			fields: ['userID'],
			type: 'foreign key',
			name: 'fk_user_comment',
			references: {
				table: 'user',
				field: 'userID',
			},
		});
	},
};
