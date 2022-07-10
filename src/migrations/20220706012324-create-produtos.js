'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	const ProdutosTable = queryInterface.createTable("Produtos",{
		id: {
			allowNull:false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		nomeProduto: {
			allowNull:false,
			type: Sequelize.STRING
		},
		codigoDoProduto: {
			allowNull:false,
			type: Sequelize.STRING
		},
		descricaoDoProduto: {
			allowNull:false,
			type: Sequelize.STRING
		},
		unidadeDeMedida: {
			allowNull:false,
			type: Sequelize.STRING
		},
		valorDaCompra: {
			allowNull:false,
			type: Sequelize.INTEGER
		},
		precoDaVenda: {
			allowNull:false,
			type: Sequelize.INTEGER
		},
	})

	return ProdutosTable
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Produtos")
  }
};
