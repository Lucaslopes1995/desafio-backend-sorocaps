const retornaDadoToken = async (req,res,next) => {
	const {user} = req
	if(user) return res.status(204).json()

	return res.status(401).json({message:"Sem Autorização"})
}


module.exports = retornaDadoToken;