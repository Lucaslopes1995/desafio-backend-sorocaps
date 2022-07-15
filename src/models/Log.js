const Log = (sequelize,DataTypes) => {
	const Log = sequelize.define("Logs",{
		idAlterado: DataTypes.INTEGER,
		idUser: DataTypes.INTEGER,
		user: DataTypes.STRING,
		data: DataTypes.STRING,
		tabela: DataTypes.STRING,
		acao: DataTypes.STRING,
	},{
		timestamps:false,
	}
	);
	return Log;

}

module.exports = Log;