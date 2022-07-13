const jwt = require('jsonwebtoken');

const { Users } = require('../models');

const secret = 'criandoNovoUsuario';

const validateJwt = async (req,res,next) => {
	const token = req.headers.authorization;
	try {
		if(!token) return res.status(401).json({message: "Token não existe"});
		
		const payload = jwt.verify(token,secret);
		
		const {name} = payload.data;
		
		const user = await Users.findOne({where: {name}});
		
		if(!user) return res.status(401).json({message: "Token Inválido"});

		req.user = user;

		next();

		
	} catch (error) {
		return res.status(500).json({message: "Problema com o Token"});
	}

}

module.exports = validateJwt;
