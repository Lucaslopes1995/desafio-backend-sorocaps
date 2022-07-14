'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Produtos",[
		{
			nomeProduto: "Celular",
			codigoDoProduto: "123551",
			descricaoDoProduto: "exemplo descrição1",
			unidadeDeMedida: "exemplo unidade",
			valorDaCompra: 1500,
			precoDaVenda: 3200,
		},
		{	
			nomeProduto: "computador",
			codigoDoProduto: "241352",
			descricaoDoProduto: "exemplo descrição2",
			unidadeDeMedida: "exemplo unidade 2",
			valorDaCompra: 1000,
			precoDaVenda: 1200,
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Produtos", null, {});
  }
};
