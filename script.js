$(document).ready(function(){
  $('.tabs').tabs();
});

fetch('http://www.mocky.io/v2/5d6ed7ab320000c0c1a8aabd', {
    method: 'GET'
  })
  .then(function(response) {
    response.json().then(function(data) {
      // console.log(data);
      mostra_dados(data);
    });
  })
  .catch(function(err) {
    console.error('Failed retrieving information', err);
  });


function mostra_dados(data) {
  console.log(data);
  // console.log("Aqui");
  var $minhaTabela = $("#tabela_vendas_conteudo");
  // console.log($minhaTabela);
  var linha = "";
  linha += "<tr><td>" + "Homens vs Mulheres" +"</td><td>" + "100 x 150" + "</td></tr>";

  $minhaTabela.html(linha);
}

function limparSelecao() {

}
