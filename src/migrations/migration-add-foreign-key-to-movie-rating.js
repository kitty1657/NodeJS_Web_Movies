"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint("movierating", {
			fields: ["movieID"],
			type: "foreign key",
			name: "fk_movie_movierating",
			references: {
				table: "movie",
				field: "movieID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
		await queryInterface.addConstraint("movierating", {
			fields: ["ratingID"],
			type: "foreign key",
			name: "fk_rating_movierating",
			references: {
				table: "rating",
				field: "ratingID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
	},
	async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint("movieactor", {
			fields: ["movieID"],
			type: "foreign key",
			name: "fk_movie_movierating",
			references: {
				table: "movie",
				field: "movieID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
		await queryInterface.removeConstraint("movieactor", {
			fields: ["ratingID"],
			type: "foreign key",
			name: "fk_rating_movierating",
			references: {
				table: "rating",
				field: "ratingID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
	},
};
