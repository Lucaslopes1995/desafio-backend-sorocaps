'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Users",[
		{
			usuario: "Admin",
			name: "Admin",
			password: "admin12345"
		},
		{
			usuario: "Joao123",
			name: "Joao",
			password: "joao12345"
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Users", null, {});
  }
};
