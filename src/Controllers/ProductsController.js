
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

// const getByCNPJ = async (cnpj) => {

// 	try {
// 		const produto = await ProductService.getByCNPJ(cnpj);

// 		return produto
		
// 	} catch (error) {
// 		return error.message
// 	}
// };

const create = async (req, res) => {
	const { nomeProduto,  codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda } = req.body;
	// const dataProducts = {codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda}
	// const {user} = req;
	// console.log(req.body);

	try {
		// const produto = await getByCNPJ(cnpj)
		// console.log(req.body)
		// if (produto) return res.status(401).json({message:"CNPJ Já existe"});
		await ProductService.create( nomeProduto, codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda );
		return res.status(203).json({message:"Produto Criado com Sucesso"});
		
	} catch (error) {
		return res.status(500).json({message: error});
	}
};


module.exports = {getAll, getById, create};