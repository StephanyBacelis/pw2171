//Agrega el código (un enlace) al main.js
const rq = require('electron-require');
const main = rq.remote('./main.js');

var botonesNumeros = ['btn00', 'btn01', 'btn02','btn03',
  'btn04','btn05','btn06','btn07','btn08','btn09']

var botonesOperador = ['btnSumar', 'btnRestar',
'btnMultiplicar','btnDividir']

var operador = "";

function numeros() {
  var num = String(this.value);

  if(operador == ""){
    var va = document.getElementById('op1').value;
    if(va == 0){
      document.getElementById('op1').value="";
    }

    document.getElementById('op1').value+=num;
  }else {
    var va = document.getElementById('op2').value;
    if(va == 0){
      document.getElementById('op2').value="";
    }

    document.getElementById('op2').value+=num;
  }

}

function operadores() {
  operador = String(this.value); //+,-,*,/
}

function igual() {
  var valor1 = document.getElementById('op1').value;
  var valor2 = document.getElementById('op2').value;

  document.getElementById('res').value=eval(valor1+operador+valor2);
}

function borrar() {
  document.getElementById('op1').value="0";
  document.getElementById('op2').value="0";
  document.getElementById('res').value="0";
  operador="";
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
