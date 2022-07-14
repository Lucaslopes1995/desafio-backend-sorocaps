
const ProductService =  require('../Services/ProductService');



const getAll = async (_req, res) => {
	try {
		const produtos = await ProductService.getAll();
		if(produtos.length===0) return res.status(404).json({message:"Nenhum Produto Encontrado"});
		return res.status(202).json(produtos);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const getById = async (req, res) => {
	const { id } = req.params;
	try {
		const produto = await ProductService.getById(id);
		if (produto === null) return res.status(404).json({message:"Produto Não Encontrado"});
		return res.status(202).json(produto);
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};

const create = async (req, res, next) => {
	const { nomeProduto,  codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda } = req.body;


	try {

		if (!nomeProduto) return res.status(400).json({message:"É preciso adicionar o Nome do Produto"});
		if (!codigoDoProduto) return res.status(400).json({message:"É preciso adicionar Código do Produto"});
		if (!descricaoDoProduto) return res.status(400).json({message:"É preciso adicionar a Descrição do Produto"});
		if (!unidadeDeMedida) return res.status(400).json({message:"É preciso adicionar a Unidade de Medida"});
		if (!valorDaCompra) return res.status(400).json({message:"É preciso adicionar o Valor da Compra"});
		if (!precoDaVenda) return res.status(400).json({message:"É preciso adicionar o Preço da Venda"});

		await ProductService.create( nomeProduto, codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda );

		req.res = {status:201,message:{message:"Produto Criado com Sucesso"}}
		next();
		
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getById, create};