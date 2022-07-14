'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Pedidos",[
		{
			cliente_id: 1,
			produto_id: 1,
			valorDaVenda: 3500,
			quantidade: 2,
			status: "APROVADO",
		},
		{
			cliente_id: 1,
			produto_id: 1,
			valorDaVenda: 4000,
			quantidade: 2,
			status: "EM PROCESSO",
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Pedidos", null, {});
  }
};
