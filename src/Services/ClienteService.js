const {Clientes, Pedidos} =  require('../models');




const getAll = async () =>{
	try {
		const cliente = await Clientes.findAll();
		return cliente;
		
	} catch (error) {
		console.log(error)
	}


}

const getById = async (id) => {
	const cliente = await Clientes.findByPk(id);
	return cliente;
}

const getByCNPJ = async (cnpj) => {
	// console.log("awd")
	const cliente = await Clientes.findOne({where: {cnpj}});
	if (cliente) return cliente

	return false;
}

const create = async ( nome, razaoSocial, cnpj, endereco) => {
	const user = await Clientes.create({nome,razaoSocial, cnpj, endereco});
	return user;
}

module.exports = {getAll, getById, getByCNPJ, create};