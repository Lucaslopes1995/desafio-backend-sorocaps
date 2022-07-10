'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Pedidos",[
		{
			valorDaVenda: 123,
			quantidade: 123,
			status: "ok",
			cliente_id: 1,
			produto_id: 1,
		},
		{
			valorDaVenda: 12,
			quantidade: 2,
			status: "opa",
			cliente_id: 1,
			produto_id: 1,
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Pedidos", null, {});
  }
};
