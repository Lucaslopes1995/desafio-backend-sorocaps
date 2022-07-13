const jwt = require('jsonwebtoken');
const { use } = require('../Routes');

const secret = process.env.SECRET;



const geraToken = async (req, res) => {
	
	const {usuario, password} = req.body;

	const user = {usuario, password}
	
	
	const jwtConfig = {
		expiresIn: '7d',
		algorithm: 'HS256',
	};
	
	const token = jwt.sign({ data: user }, secret, jwtConfig);
	return res.status(200).json({ token });
} 

module.exports = geraToken