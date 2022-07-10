const Log = (sequelize,DataTypes) => {
	const Log = sequelize.define("Logs",{
		log: DataTypes.STRING,
	},{
		timestamps:false,
	}
	);
	return Log;

}

module.exports = Log;