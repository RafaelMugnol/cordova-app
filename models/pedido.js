const mongoose = require('mongoose');


var Item = new mongoose.Schema({
  pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'itens' },
  nome: String,
  quantidade: Number,
});

const Pedido = new mongoose.Schema(
  {
    mesa: Number,
    itens: [Item],
  }
);

module.exports = mongoose.model("Pedido", Pedido);