const mongoose = require('mongoose')


var Item = new Schema({
    pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'itens' },
    nome: String,
    quatidade: Number,
});

const Pedido = new mongoose.Schema(
    {
        mesa: Number,
        itens: [Item],
    }
);

module.exports = mongoose.model("Pedido", Pedido);