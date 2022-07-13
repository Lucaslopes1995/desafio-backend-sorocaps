const jwt = require('jsonwebtoken');

const { Users } = require('../models');

const secret = process.env.SECRET;


const validateJwt = async (req,res,next) => {
	const token = req.headers.authorization;

	try {
		if(!token) return res.status(404).json({message: "Token não existe"});
		
		const payload = jwt.verify(token,secret);
		
		const {usuario} = payload.data;
		
		const user = await Users.findOne({where: {usuario}});
		
		if(!user) return res.status(404).json({message: "Token Inválido"});

		req.user = user;


		next();

		
	} catch (error) {
		return res.status(500).json({message: "Problema com o Token"});
	}

}

module.exports = validateJwt;
