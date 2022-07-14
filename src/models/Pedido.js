const Pedido = (sequelize,DataTypes) => {
	const Pedido = sequelize.define("Pedidos",{
		valorDaVenda: DataTypes.INTEGER,
		quantidade: DataTypes.INTEGER,
		status: DataTypes.STRING,

	},{
		timestamps:false,
	}
	);


	Pedido.associate = (models) => {
		Pedido.belongsTo(models.Clientes, {
			foreignKey: 'cliente_id', as: "clientes" 
		})

		Pedido.belongsTo(models.Produtos, {
			foreignKey: 'produto_id', as: "produtos" 
	   })
	};


	return Pedido;

}

module.exports = Pedido;