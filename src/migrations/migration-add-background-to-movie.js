"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("movie", "background", { type: Sequelize.TEXT('long') });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("movie", "background", {
      type: Sequelize.TEXT('long'),
    });
  },
};
