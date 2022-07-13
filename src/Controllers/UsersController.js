
const UserService =  require('../Services/UsersService');



const getAll = async (_req, res) => {
	try {
		const users = await UserService.getAll();
		if(users.length===0) return res.status(404).json({message:"Nenhum Usuário"});
		return res.status(202).json(users);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getById = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await UserService.getById(id);
		if (user === null) return res.status(404).json({message:"Usuário Não Encontrado"});
		return res.status(202).json(user);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const verificaByName = async (req, res, next) => {
	const { name } = req.params;
	try {
		const user = await UserService.verificaByName(name);
		if (user === null) return res.status(404).json({message:"Usuário Não Encontrado"});
		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const verificaByNamePWD = async (req, res, next) => {
	const { name, password } = req.body;
	console.log(req.body);
	try {
		const user = await UserService.verificaByNamePWD(name, password);
		console.log(user);
		if (user === "Usuário não encontrado") return res.status(404).json({message:"Usuário não encontrado"});
		if (user === null) return res.status(404).json({message:"Dados Inválidos"});
		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getByName = async (name, password) => {

	try {
		const user = await UserService.getByName(name, password);

		return user
		
	} catch (error) {
		return error.message
	}
};

const create = async (req, res, next) => {
	const { name, password } = req.body;
	// console.log(req.body)

	try {
		if(!name && !password) return res.status(401).json({message:"É preciso adicionar Nome e Senha"});
		if(!name) return res.status(401).json({message:"É preciso adicionar Nome"});
		if(!password) return res.status(401).json({message:"É preciso adicionar Senha"});
		const user = await getByName(name, password)
		if (user) return res.status(401).json({message:"Usuário já existe"});
		await UserService.create(name, password);
		
		next()
		// return res.status(203).json({message:"Usuário Criado com Sucesso"});
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getByName, getById, verificaByName, verificaByNamePWD ,create};