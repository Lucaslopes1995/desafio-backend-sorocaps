'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Produtos",[
		{
			nomeProduto: "Celular",
			codigoDoProduto: "testeCod",
			descricaoDoProduto: "testeCod",
			unidadeDeMedida: "teste",
			valorDaCompra: 1500,
			precoDaVenda: 3200,
		},
		{	
			nomeProduto: "computador",
			codigoDoProduto: "teste1",
			descricaoDoProduto: "teste1234",
			unidadeDeMedida: "awd",
			valorDaCompra: 1000,
			precoDaVenda: 1200,
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Produtos", null, {});
  }
};
