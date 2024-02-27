"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('movie',{
			fields: ['countryID'],
			type: 'foreign key',
			name: 'fk_country',
			references: {
				table: 'country',
				field:'countryID' 
			},
			onDelete: 'CASCADE',
			onDelete: 'CASCADE'
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('movie',{
			fields: ['countryID'],
			type: 'foreign key',
			name: 'fk_country',
			references: {
				table: 'country',
				field:'countryID' 
			},
			onDelete: 'CASCADE',
			onDelete: 'CASCADE'
		})
	},
};
