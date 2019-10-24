const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const server = require('http').Server(app);


app.use(cors());


mongoose.connect('mongodb+srv://admin:admin@cluster0-a8meg.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Para poder referenciar o css e js no html
app.use(express.static(__dirname + "/frontend"));

app.use(express.json());

app.use(require('./routes'));

server.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333.');
});