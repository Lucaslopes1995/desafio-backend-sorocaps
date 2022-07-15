
const {Logs, Users} =  require('../models');


const getAll = async (_req, res) =>{
	try {
		const logs = await Logs.findAll();
		return res.status(202).json(logs);
		
	} catch (error) {
		console.log(error)
		return res.status(401).json(error.message);
	}
}



const create = async (req, res) =>{

	try {

		const {status, token, message, idAlterado} = req.res
		const path = req.route.path;
		const {method} =req;
		
	
		const acao = (method ==="POST") ? "Add" : "Update";
		
		const tabela = path.replace(/\/(.+)\/?(.+)$/,function(_total,pt1){
			return (pt1[0].toUpperCase() + pt1.substring(1)).replace("/:i","")
		})

		const {usuario} = req.user;

		const dataUser = await Users.findOne({where:{usuario}})

		const {id:idUser, usuario:user} = dataUser.dataValues;

		let d = new Date();
		let data = new Date(d.valueOf() - d.getTimezoneOffset() * 60000).toISOString();

		await Logs.create({idAlterado, idUser, user, data, tabela, acao});

		

		if(token){
			return res.status(status).json({token})
		}
		return res.status(status).json(message)

	} catch (error) {
		return res.status(500).json({message:"Problemas para salvar dados"})
	}

}


module.exports = {getAll,create};