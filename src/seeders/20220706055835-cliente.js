'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Clientes",[
		{
			nome:"fernando",
			razaoSocial: "testeRa",
			cnpj: '1234567',
			endereco: "rua teste",
		},
		{
			nome:"gabriela",
			razaoSocial: "teste1",
			cnpj: '1234512',
			endereco: "rua outro teste",
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Clientes", null, {});
  }
};
