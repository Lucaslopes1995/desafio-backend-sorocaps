
const ClienteService =  require('../Services/ClienteService');



const getAll = async (_req, res) => {
	try {
		const users = await ClienteService.getAll();
		if(users.length===0) return res.status(404).json({message:"Nenhum Cliente Encontrado"});
		return res.status(202).json(users);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getById = async (req, res) => {
	const { id } = req.params;
	try {
		const cliente = await ClienteService.getById(id);
		if (cliente === null) return res.status(404).json({message:"Cliente Não Encontrado"});
		return res.status(202).json(cliente);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getByCNPJ = async (cnpj) => {

	try {
		const cliente = await ClienteService.getByCNPJ(cnpj);

		return cliente
		
	} catch (error) {
		return error.message
	}
};

const create = async (req, res) => {
	const { nome, razaoSocial, cnpj, endereco } = req.body;
	// const {user} = req;
	
	try {
		// console.log(req.body)
		const cliente = await getByCNPJ(cnpj)
		if (cliente) return res.status(401).json({message:"CNPJ Já existe"});
		await ClienteService.create(nome, razaoSocial, cnpj, endereco);
		
		return res.status(203).json({message:"Cliente Criado com Sucesso"});
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getById, create};