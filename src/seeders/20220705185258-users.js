'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Users",[
		{
			name: "Admin",
			password: "admin12345"
		},
		{
			name: "Joao",
			password: "joao12345"
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Users", null, {});
  }
};
