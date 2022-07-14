'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	queryInterface.bulkInsert("Clientes",[
		{
			nome:"cliente Exemplo",
			razaoSocial: "exeplo razao social",
			cnpj: '32.111.111/0001-11',
			endereco: "exeplo cliente",
		},
		{
			nome:"gabriela",
			razaoSocial: "exeplo teste2",
			cnpj: '32.111.113/0001-11',
			endereco: "exeplo cliente2",
		}
	])
  },

  async down (queryInterface, Sequelize) {
	queryInterface.bulkDelete("Clientes", null, {});
  }
};
