const Pedido = require('../models/pedido');

class PedidoController {
    async inserir(req, res) {
        const pedido = await Pedido.create(req.body);

        return res.send({ pedido })
    }

    async listar(req, res) {
        const pedidos = await Pedido.find();

        return res.send({ pedidos })
    }
}

module.exports = new PedidoController();