
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

const create = async (req, res, next) => {

	const { nome, razaoSocial, cnpj, endereco } = req.body;

	try {
		if (!nome) return res.status(400).json({message:"Nome não pode estar em vazio"});
		if (!razaoSocial) return res.status(400).json({message:"A Razao Social não pode estar em vazio"});
		if (!cnpj) return res.status(400).json({message:"O CNPJ não pode estar em vazio"});
		if (!/^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/.test(cnpj)) return res.status(400).json({message:"O CNPJ precisa estar no seguinte formato 11.111.111/0001-21"});
		if (!endereco) return res.status(400).json({message:"O Endereco não pode estar em vazio"});


		const cliente = await getByCNPJ(cnpj)
		if (cliente) return res.status(405).json({message:"CNPJ Já existe"});
		const {_previousDataValues} = await ClienteService.create(nome, razaoSocial, cnpj, endereco);

		const {id:idAlterado} = _previousDataValues;
		
		req.res = {status:201,message:{message:"Cliente Criado com Sucesso"}, idAlterado}
		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getById, create};