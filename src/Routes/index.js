const {Router} = require('express');

const UsersController = require('../Controllers/UsersController')

const ProductsController = require('../Controllers/ProductsController')

const ClienteController = require('../Controllers/ClienteController')

const PedidoController = require('../Controllers/PedidoController')


const GeradorJWTToken = require('../midlewares/GeradorJWTToken')

const GeradorJWTTokenLogin = require('../midlewares/GeradorJWTTokenLogin')

const validateToken = require('../auth/validateToken')

const retornaDadoToken = require('../auth/retornaDadoToken')

const LogssService = require('../Services/LogssService')

const router = Router();

router.get('/validtoken/',validateToken, retornaDadoToken);

router.get('/users',UsersController.getAll);


router.get('/logs',LogssService.getAll);

router.get('/users/:id',UsersController.getById);


router.post('/user/:name',UsersController.vericaByUser, GeradorJWTTokenLogin);

router.post('/user/',UsersController.vericaByUserPWD, GeradorJWTTokenLogin);

router.post('/users/',UsersController.create, GeradorJWTToken, LogssService.create);

router.get('/clientes/',ClienteController.getAll);

router.post('/clientes/',validateToken,ClienteController.create, LogssService.create);

router.get('/produtos/',ProductsController.getAll);

router.post('/produtos/',validateToken,ProductsController.create, LogssService.create);

router.get('/pedidos/',PedidoController.getAll);

router.post('/pedidos/',validateToken,PedidoController.create, LogssService.create);

router.put('/pedidos/:id',validateToken,PedidoController.update, LogssService.create);



module.exports = router;
