$(document).ready(function () {
  $('.tabs').tabs();
});

function limparSelecao() {
  var itens = $(".badge");//[0].innerHTML = 0
  
  for (const i in itens) {
    itens[i].innerHTML = 0;
  }
}

function adiciona(e) {
  var qtdeAntga = parseInt(e.firstChild.innerHTML);
  e.firstChild.innerHTML = qtdeAntga + 1;
}