const {Pedidos, Clientes, Produtos} =  require('../models');




const getAll = async () =>{
	try {
		// console.log("awd",Pedidos)
		// const pedidos = await Pedidos.findAll();
		const pedidos = await Pedidos.findAll({include: [{model:Clientes, as: "clientes"}, {model:Produtos, as: "produtos"}]});
		// const pedidos = await Pedidos.findAll({include: {model:Produtos, as: "produtos"}});

		return pedidos;
		
	} catch (error) {
		console.log(error)
	}


}

const getById = async (id) => {
	const pedido = await Pedidos.findByPk(id);
	return pedido;
}

const create = async ( valorDaVenda, quantidade, status, cliente_id, produto_id) => {
	// console.log(valorDaVenda, quantidade, status, cliente_id, produto_id);
	const pedido = await Pedidos.create({valorDaVenda, quantidade, status, cliente_id, produto_id: produto_id});
	return pedido;
}

const update = async (id) => {
	// console.log(valorDaVenda, quantidade, status, cliente_id, produto_id);
	const pedido = await Pedidos.findOne({where:{id}});
	let pedidoUpdated = false;
	if(pedido) {
		pedidoUpdated = await Pedidos.update({...pedido.dataValues,status:"APROVADOS"},{where:{id}});
	}
	// console.log({...pedido.dataValues,status:"APROVADO"});
	return pedidoUpdated;
}

module.exports = {getAll, getById, create, update};