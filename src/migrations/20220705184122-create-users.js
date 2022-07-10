'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	const UsersTable = queryInterface.createTable("Users",{
		id: {
			allowNull:false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		name: {
			allowNull:false,
			type: Sequelize.STRING
		},
		password: {
			allowNull:false,
			type: Sequelize.STRING
		},
	})

	return UsersTable
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Users")
  }
};
