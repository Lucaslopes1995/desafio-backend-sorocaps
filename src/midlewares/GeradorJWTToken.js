const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;



const geraToken = async (req, _res, next) => {
	
	const {usuario, password} = req.body;
	const user = {usuario, password}
	
	const jwtConfig = {
		expiresIn: '7d',
		algorithm: 'HS256',
	};
	
	const token = jwt.sign({ data: user }, secret, jwtConfig);
	req.user = {usuario, password}
	req.res = {status: 200, token}
	next();
} 

module.exports = geraToken