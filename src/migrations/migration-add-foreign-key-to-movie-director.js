"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint("moviedirector", {
			fields: ["movieID"],
			type: "foreign key",
			name: "fk_movie_moviedirector",
			references: {
				table: "movie",
				field: "movieID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
		await queryInterface.addConstraint("moviedirector", {
			fields: ["directorID"],
			type: "foreign key",
			name: "fk_director_moviedirector",
			references: {
				table: "director",
				field: "directorID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("moviedirector");
        await queryInterface.removeConstraint("moviedirector", {
			fields: ["movieID"],
			type: "foreign key",
			name: "fk_movie_moviedirector",
			references: {
				table: "movie",
				field: "movieID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
		await queryInterface.removeConstraint("moviedirector", {
			fields: ["directorID"],
			type: "foreign key",
			name: "fk_director_moviedirector",
			references: {
				table: "director",
				field: "directorID",
			},
			onDelete: "CASCADE",
			onDelete: "CASCADE",
		});
	},
};
