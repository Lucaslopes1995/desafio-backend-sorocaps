'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	const ClientesTable = queryInterface.createTable("Clientes",{
		id: {
			allowNull:false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		nome: {
			allowNull:false,
			type: Sequelize.STRING
		},
		razaoSocial: {
			allowNull:false,
			type: Sequelize.STRING
		},
		cnpj: {
			allowNull:false,
			type: Sequelize.STRING
		},
		endereco: {
			allowNull:false,
			type: Sequelize.STRING
		},
	})

	return ClientesTable
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Clientes")
  }
};
