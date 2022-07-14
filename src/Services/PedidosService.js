const {Pedidos, Clientes, Produtos} =  require('../models');




const getAll = async () =>{
	try {
		const pedidos = await Pedidos.findAll({include: [{model:Clientes, as: "clientes"}, {model:Produtos, as: "produtos"}]});

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
	const pedido = await Pedidos.create({valorDaVenda, quantidade, status, cliente_id, produto_id: produto_id});
	return pedido;
}

const update = async (id) => {
	const pedido = await Pedidos.findOne({where:{id}});
	let pedidoUpdated = false;
	if(pedido) {
		pedidoUpdated = await Pedidos.update({...pedido.dataValues,status:"APROVADOS"},{where:{id}});
	}
	return pedidoUpdated;
}

module.exports = {getAll, getById, create, update};