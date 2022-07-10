const {Produtos} =  require('../models');




const getAll = async () =>{
	try {
		const produtos = await Produtos.findAll();
		return produtos;
		
	} catch (error) {
		// console.log(error)
	}


}

const getById = async (id) => {
	const produto = await Produtos.findByPk(id);
	return produto;
}

// const getByCNPJ = async (cnpj) => {
// 	const produto = await Produto.findOne({where: {cnpj}});
// 	if (produto) return produto

// 	return false;
// }

const getByPrecoVendaID = async (id) => {
	// console.log(id)
	const produto = await Produtos.findByPk(id);
	// console.log(produto) 

	if (produto) return produto

	return false;
}

const create = async ( nomeProduto,codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda ) => {
	// console.log(codigoDoProduto)
	const user = await Produtos.create({nomeProduto, codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda});
	return user;
}

module.exports = {getAll, getById, getByPrecoVendaID,  create};