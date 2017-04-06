//Agrega el código (un enlace) al main.js
const rq = require('electron-require');
const main = rq.remote('./main.js');

var botonesNumeros = ['btn00', 'btn01', 'btn02','btn03',
  'btn04','btn05','btn06','btn07','btn08','btn09']

var botonesOperador = ['btnSumar', 'btnRestar',
'btnMultiplicar','btnDividir']

function numeros() {
  alert(this.id);
  alert(this.value);
}

function operadores() {

}

function igual() {

}

function borrar() {

}

//Asignación de eventos a los botones de número
for (var i = 0; i < botonesNumeros.length; i++) {
  document.getElementById(botonesNumeros[i]).addEventListener('click', numeros);
}

//Asignación de eventos a los botones de operador
for (var i = 0; i < botonesOperador.length; i++) {
  document.getElementById(botonesOperador[i]).addEventListener('click', operadores);
}
//Evento Click del botón igual
document.getElementById("btnIgual").addEventListener('click', igual);
//Evento Click del botón CE
document.getElementById("btnCE").addEventListener('click', borrar);
