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
		idAlterado: {
			allowNull:false,
			type: Sequelize.INTEGER
		},
		idUser: {
			allowNull:false,
			type: Sequelize.INTEGER
		},
		user: {
			allowNull:false,
			type: Sequelize.STRING
		},
		data: {
			allowNull:false,
			type: Sequelize.STRING
		},
		tabela: {
			allowNull:false,
			type: Sequelize.STRING
		},
		acao: {
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
