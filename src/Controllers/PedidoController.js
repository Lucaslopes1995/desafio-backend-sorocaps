
const PedidosService =  require('../Services/PedidosService');

const ProductService =  require('../Services/ProductService');





const getAll = async (_req, res) => {
	try {
		const pedidos = await PedidosService.getAll();
		// console.log(pedidos)
		if(pedidos.length===0) return res.status(404).json({message:"Nenhum Pedido Encontrado"});
		return res.status(202).json(pedidos); 
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getById = async (req, res) => {
	const { id } = req.params;
	try {
		const cliente = await PedidosService.getById(id);
		if (cliente === null) return res.status(404).json({message:"Cliente Não Encontrado"});
		return res.status(202).json(cliente);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

// const getByPrecoVendaID = async (id) => {

// 	try {
// 		const cliente = await ProductService.getByPrecoVendaID(id);

// 		return cliente
		
// 	} catch (error) {
// 		return error.message
// 	}
// };

const create = async (req, res) => {
	const { valorDaVenda, quantidade, status, cliente_id, produto_id } = req.body;
	// const {user} = req;
	
	try {
		// console.log(valorDaVenda, status, cliente_id, produto_id);
		const produto = await ProductService.getByPrecoVendaID(produto_id)
		const precoCadastrado = produto?.dataValues?.precoDaVenda
		// console.log(produto.dataValues.precoDaVenda)

		if (!valorDaVenda) return res.status(401).json({message:"É preciso adicionar o Valor da Venda"});
		if (!quantidade) return res.status(401).json({message:"É preciso adicionar a Quantidade"});
		if (!status) return res.status(401).json({message:"É preciso adicionar o Status"});
		if (!cliente_id) return res.status(401).json({message:"É preciso adicionar o id do Cliente"});
		if (!produto_id) return res.status(401).json({message:"É preciso adicionar o id do produto"});


		
		if (valorDaVenda<precoCadastrado) return res.status(401).json({message:"Valor não pode ser menor que o Valor da venda do produto"});
		// console.log(precoCadastrado)
		
		// console.log(valorDaVenda, status, cliente_id, produto_id);

		await PedidosService.create(valorDaVenda,quantidade, status, cliente_id, produto_id);
		
		return res.status(203).json({message:"Pedido Criado com Sucesso"});
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const update = async (req, res) => {
	const { id } = req.params;
	// const {user} = req;
	
	try {
		// console.log(valorDaVenda, status, cliente_id, produto_id);
		const produto = await PedidosService.update(id)
		if(!produto) return res.status(401).json({message:"Problemas ao alterar Produto"});
		
		return res.status(203).json({message:"produto atualizado com Sucesso"});
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getById, create, update};