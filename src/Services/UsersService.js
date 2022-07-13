
const {Users} =  require('../models');




const getAll = async () =>{
	try {
		const users = await Users.findAll();
		return users;
		
	} catch (error) {
		console.log(error)
	}


}

const getById = async (id) => {
	const user = await Users.findByPk(id);
	return user;
};

const vericaByUser = async (usuario) => {
	const user = await Users.findOne({where:{usuario}});
	console.log(user)
	return user;
}

const vericaByUserPWD = async (usuario,password) => {
	// console.log("name")
	const nameUser = await Users.findOne({where:{usuario}});
	// console.log(nameUser);

	if (!nameUser) return "Usuário não encontrado";

	const user = await Users.findOne({where:{usuario, password}});
	return user;
}

const getByUser = async (usuario, password) => {
	const user = await Users.findOne({where: {usuario, password}});
	if (user) return user

	return false;
}

const create = async ( name, usuario, password) => {
	const user = await Users.create({name, usuario,  password});
	return user;
}

module.exports = {getAll, getById, vericaByUser, vericaByUserPWD, getByUser, create};