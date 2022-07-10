
const {Log} =  require('../models');



const create = async (e) =>{

	// console.log(e.res)

	const a = JSON.stringify(e)

	const Logs = await Log.create({log:a});
	return Logs;

}


module.exports = {create};