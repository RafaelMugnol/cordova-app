$(document).ready(function() {
  $('.tabs').tabs();
  $('.modal').modal();
  $('.sidenav').sidenav();
  M.updateTextFields();

  axios.get('/pedido')
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });

});