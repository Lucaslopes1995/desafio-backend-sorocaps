const Cliente = (sequelize,DataTypes) => {
	const Cliente = sequelize.define("Clientes",{
		nome:DataTypes.STRING,
		razaoSocial: DataTypes.STRING,
		cnpj: DataTypes.INTEGER,
		endereco: DataTypes.STRING
	},{
		timestamps:false,
	}
	);

	Cliente.associate = (models) => {
		Cliente.hasMany(models.Pedidos,{foreignKey: 'cliente_id', as: "cliente" })
	};


	return Cliente;

}

module.exports = Cliente;
