
const {Logs} =  require('../models');



const create = async (e) =>{

	// console.log(e.res)
	
	// const a = JSON.stringify(e)
	// console.log((JSON.parse(e)))

	await Logs.create({log:e});
	// return Logs;

}


module.exports = {create};