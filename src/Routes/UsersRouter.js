const {Router} = require('express');

const UsersController = require('../Controllers/UsersController')

const ProductsController = require('../Controllers/ProductsController')

const ClienteController = require('../Controllers/ClienteController')

const PedidoController = require('../Controllers/PedidoController')


const GeradorJWTToken = require('../midlewares/GeradorJWTToken')

const GeradorJWTTokenLogin = require('../midlewares/GeradorJWTTokenLogin')

const validateToken = require('../auth/validateToken')

const retornaDadoToken = require('../auth/retornaDadoToken')




const router = Router();



router.get('/validtoken/',validateToken, retornaDadoToken);

router.get('/users',UsersController.getAll);

router.get('/users/:id',UsersController.getById);

router.post('/user/:name',UsersController.verificaByName, GeradorJWTTokenLogin);

router.post('/user/',UsersController.verificaByNamePWD, GeradorJWTTokenLogin);


router.post('/users/',UsersController.create, GeradorJWTToken);

router.get('/clientes/',ClienteController.getAll);


router.post('/clientes/',validateToken,ClienteController.create);

router.get('/produtos/',ProductsController.getAll);

router.post('/produtos/',validateToken,ProductsController.create);

router.get('/pedidos/',PedidoController.getAll);

router.post('/pedidos/',PedidoController.create);

router.put('/pedidos/:id',PedidoController.update);



module.exports = router;
