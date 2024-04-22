"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint("movieactor", {
			fields: ["movieID"],
			type: "foreign key",
			name: "fk_movie_movieactor",
			references: {
				table: "movie",
				field: "movieID",
			},
		});
		await queryInterface.addConstraint("movieactor", {
			fields: ["actorID"],
			type: "foreign key",
			name: "fk_actor_movieactor",
			references: {
				table: "actor",
				field: "actorID",
			},
		});
	},
	async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint("movieactor", {
			fields: ["movieID"],
			type: "foreign key",
			name: "fk_movie_movieactor",
			references: {
				table: "movie",
				field: "movieID",
			},
		});
		await queryInterface.removeConstraint("movieactor", {
			fields: ["actorID"],
			type: "foreign key",
			name: "fk_actor_movieactor",
			references: {
				table: "actor",
				field: "actorID",
			},
		});
	},
};
