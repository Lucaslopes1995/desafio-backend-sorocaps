'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
	const PedidosTable = queryInterface.createTable("Pedidos",{
		id: {
			allowNull:false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		valorDaVenda: {
			allowNull:false,
			type: Sequelize.INTEGER
		},
		quantidade: {
			allowNull:false,
			type: Sequelize.INTEGER
		},
		status: {
			allowNull:false,
			type: Sequelize.STRING
		},
		cliente_id: {
			type: Sequelize.INTEGER,
			allowNull:false,
			onUpdate: "CASCADE",
			onDelete: "CASCADE",
			references: { model: "Clientes", key: "id" }
		},
		produto_id: {
			type: Sequelize.INTEGER,
			allowNull:false,
			onUpdate: "CASCADE",
			onDelete: "CASCADE",
			references: { model: "Produtos", key: "id" }
		}

	})

	return PedidosTable
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Pedidos")
  }
};
