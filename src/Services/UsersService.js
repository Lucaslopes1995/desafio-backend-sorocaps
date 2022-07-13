
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
}

const verificaByName = async (name) => {
	// console.log(name)
	const user = await Users.findOne({where:{name}});
	return user;
}

const verificaByNamePWD = async (name, password) => {
	// console.log("name")
	const nameUser = await Users.findOne({where:{name}});
	// console.log(nameUser);

	if (!nameUser) return "Usuário não encontrado";

	const user = await Users.findOne({where:{name, password}});
	return user;
}

const getByName = async (name, password) => {
	const user = await Users.findOne({where: {name, password}});
	if (user) return user

	return false;
}

const create = async ( name, password) => {
	const user = await Users.create({name, password});
	return user;
}

module.exports = {getAll, getById, verificaByName, verificaByNamePWD, getByName, create};