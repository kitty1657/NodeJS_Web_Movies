"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Movie", {
			MovieID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			Title: {
				type: Sequelize.STRING,
			},
			GenreID: {
				type: Sequelize.INTEGER,
			},
			Rating: {
				type: Sequelize.FLOAT,
			},
			CountryID: {
				type: Sequelize.INTEGER,
			},
			Release: {
				type: Sequelize.DATEONLY,
			},
			Duration: {
				type: Sequelize.INTEGER,
			},
			Thumbnail: {
				type: Sequelize.STRING,
			},
			VideoURL: {
				type: Sequelize.STRING,
			},
			Html: {
                type: Sequelize.STRING
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
		await queryInterface.dropTable("Movie");
	},
};
