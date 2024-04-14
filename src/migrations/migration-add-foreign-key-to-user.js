"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('user',{
			fields: ['roleID'],
			type: 'foreign key',
			name: 'user_role_association',
			references: {
				table: 'userrole',
				field:'roleID' 
			},
			onDelete: 'CASCADE',
			onDelete: 'CASCADE'
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('user',{
			fields: ['roleID'],
			type: 'foreign key',
			name: 'user_role_association',
			references: {
				table: 'userrole',
				field:'roleID' 
			},
			onDelete: 'CASCADE',
			onDelete: 'CASCADE'
		})
	},
};
