'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	const LogsTable = queryInterface.createTable("Logs",{
		id: {
			allowNull:false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		log: {
			allowNull:false,
			type: Sequelize.STRING
		}
	})

	return LogsTable
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Logs")
  }
};
