const jwt = require('jsonwebtoken');
const { use } = require('../Routes/UsersRouter');

const secret = 'criandoNovoUsuario';



const geraToken = async (req, res) => {
	
	const {name} = req.params;

	// console.log("op",name, password)
	const user = {name}
	
	
	const jwtConfig = {
		expiresIn: '7d',
		algorithm: 'HS256',
	};
	
	const token = jwt.sign({ data: user }, secret, jwtConfig);
	// console.log(user);
	return res.status(200).json({ token });
} 

module.exports = geraToken