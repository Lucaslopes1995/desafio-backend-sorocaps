
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

const vericaByUser = async (req, res, next) => {
	const { name } = req.params;
	try {
		const user = await UserService.verificaByName(name);
		if (user === null) return res.status(404).json({message:"Usuário Não Encontrado"});
		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const vericaByUserPWD = async (req, res, next) => {
	const { usuario, password } = req.body;
	try {
		if(!usuario) return res.status(400).json({message:"É preciso adicionar Usuário"});
		if(!password) return res.status(400).json({message:"É preciso adicionar Senha"});
		const user = await UserService.vericaByUserPWD(usuario, password);
		if (user === "Usuário não encontrado") return res.status(404).json({message:"Usuário não encontrado"});
		if (user === null) return res.status(404).json({message:"Senha Incorreta"});
		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getByUser = async (usuario, password) => {

	try {
		const user = await UserService.getByName(usuario, password);

		return user
		
	} catch (error) {
		return error.message
	}
};

const create = async (req, res, next) => {
	const { name, usuario,  password } = req.body;

	try {
		if(!name) return res.status(400).json({message:"É preciso adicionar Nome"});
		if(!usuario) return res.status(400).json({message:"É preciso adicionar Usuário"});
		if(!password) return res.status(400).json({message:"É preciso adicionar Senha"});
		const user = await UserService.vericaByUser(usuario)
		if (user) return res.status(409).json({message:"Usuário já existe"});
		await UserService.create(name, usuario, password);

		req.res = {status:201,message:{message:"Usuário Criado com Sucesso"}}
		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getByUser, getById, vericaByUser, vericaByUserPWD ,create};