$(document).ready(function () {
  $('.tabs').tabs();
  $('.modal').modal();
});

function limparSelecao() {
  var itens = $(".badge");//[0].innerHTML = 0

  for (const i in itens) {
    itens[i].innerHTML = 0;
  }
}

function mostraPedido() {
  var itens = $(".badge");//[0].innerHTML = 0
  var corpoPedido = $("#listaDeItens");
  
  var produto = $(".collection-item");
  for (const i in produto) {
    var nome = produto[i].innerHTML.split("</span>")[1];
    var quantidade = produto[i].innerHTML.split("</span>")[0].split(">")[1];
    if(quantidade > 0){
      var item = "<li>"+nome+" "+quantidade+"</li>";
      corpoPedido.append(item);
    }
  }
}

function adiciona(e) {
  var qtdeAntga = parseInt(e.firstChild.innerHTML);
  e.firstChild.innerHTML = qtdeAntga + 1;
}