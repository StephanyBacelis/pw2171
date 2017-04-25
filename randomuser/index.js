const rq = require('electron-require');
const main = rq.remote('./main.js');
//jquery().on or .off para desactivar la función
/*
$ <- significa jquery (es un alias)
*/
const $ = require('jquery');

//json = javascript object notation
/*
--corchete es un arreglo
--llaves conjunto de campos

conjunto[0]

conjunto:[
  campo: valor,
  campo2: valor,
  campoN: {
   campo3:valor,
   campo4:valor
  }
],
[
 ...
]

*/

function datosRandom() {
  //ajax es de asincrono
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      //Id con #
      $('#txtNombre').html(
        data.results[0].name.first+" "+
        data.results[0].name.last
      );

      $('#imgFoto').attr('src', data.results[0].picture.large);
    },
    error(a,b,c){
      alert("Sin internet o sin servidor");
    }
  });
}

$('#btnInfo').on('click', datosRandom);
