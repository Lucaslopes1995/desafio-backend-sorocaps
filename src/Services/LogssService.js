
const {Logs, Users} =  require('../models');


const create = async (req, res) =>{

	try {
		// let tabela, acao;
		
		const path = req.route.path;
		const {method} =req;
		
	
		const acao = (method ==="POST") ? "Add" : "Update";
		// console.log(typeof (path));
		
		const tabela = path.replace(/\/(.+)\/?(.+)$/,function(_total,pt1){
			return (pt1[0].toUpperCase() + pt1.substring(1)).replace("/:i","")
		})

	

		const {usuario} = req.user;

		const dataUser = await Users.findOne({where:{usuario}})

		const {id:idUser, usuario:user} = dataUser.dataValues;

		let d = new Date();
		let data = new Date(d.valueOf() - d.getTimezoneOffset() * 60000).toISOString();



		await Logs.create({idUser, user, data, tabela, acao});



		const {status, token, message} = req.res

		// return res.status(200).json({ token });

		if(token){
			return res.status(status).json({token})
		}
		return res.status(status).json(message)






	} catch (error) {
		return res.status(500).json({message:"Problemas para salvar dados"})
	}


	



	// next();

}


module.exports = {create};