const {Produtos} =  require('../models');

const getAll = async () =>{
	try {
		const produtos = await Produtos.findAll();
		return produtos;
		
	} catch (error) {
		console.log(error)
	}

}

const getById = async (id) => {
	const produto = await Produtos.findByPk(id);
	return produto;
}

const getByPrecoVendaID = async (id) => {
	const produto = await Produtos.findByPk(id);

	if (produto) return produto

	return false;
}

const create = async ( nomeProduto,codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda ) => {
	const user = await Produtos.create({nomeProduto, codigoDoProduto, descricaoDoProduto, unidadeDeMedida, valorDaCompra, precoDaVenda});
	return user;
}

module.exports = {getAll, getById, getByPrecoVendaID,  create};