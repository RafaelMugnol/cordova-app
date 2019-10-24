const express = require('express');
const routes = express.Router();
const PedidoController = require('./controllers/pedido');


routes.get('/', function(req, res){
  res.sendFile(__dirname + '/frontend/index.html')
});

routes.post('/pedido', PedidoController.inserir);
routes.get('/pedido', PedidoController.listar);

module.exports = routes;