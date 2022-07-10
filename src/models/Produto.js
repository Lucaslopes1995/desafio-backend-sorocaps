const Produto = (sequelize,DataTypes) => {
	const Produto = sequelize.define("Produtos",{
		nomeProduto: DataTypes.STRING,
		codigoDoProduto: DataTypes.STRING,
		descricaoDoProduto: DataTypes.STRING,
		unidadeDeMedida: DataTypes.STRING,
		valorDaCompra: DataTypes.INTEGER,
		precoDaVenda: DataTypes.INTEGER,
	},{
		timestamps:false,
	}
	);

	Produto.associate = (models) => {
		Produto.hasMany(models.Pedidos, {
			foreignKey: 'produto_id', as: "produtos" })
	};

	
	return Produto;

}

module.exports = Produto;