const rq = require('electron-require');
const main = rq.remote('./main.js');
//jquery().on or .off para desactivar la función
/*
$ <- significa jquery (es un alias)
*/
const $ = require('jquery');

var buscarPersonaje = function(){
  
}

//Posiciona el cursor en el cuadro del texto
$('#txtPersonaje').focus();

//Evento del botón btnBuscar-click
$('#btnBuscar').on('click', buscarPersonaje);
