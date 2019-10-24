$(document).ready(function () {
  $('.tabs').tabs();
  $('.modal').modal();
  M.updateTextFields();
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
  
  jsonFinal = {
    mesa: 0,
    itens: [],
  }

  for (const i in produto) {
    var nome = produto[i].innerHTML.split("</span>")[1];
    var quantidade = produto[i].innerHTML.split("</span>")[0].split(">")[1];
    
    if(quantidade > 0){
      var item = "<li>"+nome+" "+quantidade+"</li>";
      corpoPedido.append(item);
      jsonFinal.itens.push({nome: nome, quantidade: quantidade, valor: 0});
    }
  }
}

function geraJson(){
  jsonFinal.mesa = $("#mesas").val();
  console.log(jsonFinal);
  $("#listaDeItens").find("li").remove();
  limparSelecao();
}

function adiciona(e) {
  var qtdeAntga = parseInt(e.firstChild.innerHTML);
  e.firstChild.innerHTML = qtdeAntga + 1;
}