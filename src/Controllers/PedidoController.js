
const PedidosService =  require('../Services/PedidosService');

const ProductService =  require('../Services/ProductService');





const getAll = async (_req, res) => {
	try {
		const pedidos = await PedidosService.getAll();
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


const create = async (req, res, next) => {
	const { valorDaVenda, quantidade, status, cliente_id, produto_id } = req.body;

	
	try {
		const produto = await ProductService.getByPrecoVendaID(produto_id)
		const precoCadastrado = produto?.dataValues?.precoDaVenda


		if (!valorDaVenda) return res.status(400).json({message:"É preciso adicionar o Valor da Venda"});
		if (!quantidade) return res.status(400).json({message:"É preciso adicionar a Quantidade"});
		if (!status) return res.status(400).json({message:"É preciso adicionar o Status"});
		if (!cliente_id) return res.status(400).json({message:"É preciso adicionar o id do Cliente"});
		if (!produto_id) return res.status(400).json({message:"É preciso adicionar o id do produto"});


		
		if (valorDaVenda<precoCadastrado) return res.status(409).json({message:"Valor não pode ser menor que o Valor da venda do produto"});

		await PedidosService.create(valorDaVenda,quantidade, status, cliente_id, produto_id);
		
		req.res = {status:201,message:{message:"Pedido Criado com Sucesso"}}

		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const update = async (req, res,next) => {
	const { id } = req.params;
	
	try {

		const pedido = await PedidosService.update(id)
		if(!pedido) return res.status(400).json({message:"É preciso forncecer o id do Pedido"});
		
		req.res = {status:200,message:{message:"Pedido atualizado com Sucesso"}}

		next();
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getById, create, update};