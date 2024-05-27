"use strict";
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const hashUserPassword = (Password) => {
  var hashPassword = bcrypt.hashSync(Password, salt);
  return hashPassword.toString();
};
const hashPasswordFromLib = hashUserPassword("123456");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User", [
      {
        Email: "bach112003@gamil.com",
        Password: hashPasswordFromLib,
        FullName: "Trần Việt Bách",
        Address: "Hà Đông",
        Gender: 1,
        PhoneNumber: "0346331968",
        RoleID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Email: "truong16042003@gamil.com",
        Password: hashPasswordFromLib,
        FullName: "Nguyễn Việt Trường",
        Address: "Hà Tây",
        Gender: 1,
        PhoneNumber: "0363704403",
        RoleID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
