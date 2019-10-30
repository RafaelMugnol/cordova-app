$(document).ready(function() {
  $('.tabs').tabs();
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  M.updateTextFields();

  axios.get('/pedido')
    .then(function(response) {
      console.log(response.data);
      mostraPedidos(response.data.pedidos);
    })
    .catch(function(error) {
      console.log(error);
    });

});

function mostraPedidos(pedidos) {
  for (const i in pedidos) {
    const pedido = pedidos[i];

    var html = '<li>' +
      '<div class="collapsible-header">' +
      '<a onclick="deletar(\'' + pedido._id + '\')"  class="secondary-content"><i class="material-icons">delete</i></a>' +
      'Mesa ' + pedido.mesa + '</div>' +
      '<div class="collapsible-body">';

    if (pedido.itens) {
      for (const y in pedido.itens) {
        const item = pedido.itens[y];

        html += '<p>' + item.quantidade + 'x ' + item.nome + '</p>';
      }

      html += '</div></li>';

      $("#listaPedidos").append(html);

    }
  }
}

function deletar(id) {
  console.log(id);
  axios.delete('/pedido/' + id)
    .then(function(response) {
      console.log(response.data);
      location.reload();
    })
    .catch(function(error) {
      console.log(error);
    });
}