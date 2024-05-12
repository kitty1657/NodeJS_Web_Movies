"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("movie", "imdb", { type: Sequelize.FLOAT });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("movie", "imdb", {
      type: Sequelize.FLOAT,
    });
  },
};
