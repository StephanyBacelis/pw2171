//Variable global;
var operador="";

function numeros(num) {
 if(operador==""){
   //Escribir op1
   var valorInicial = document.calculadora.op1.value;
   if(valorInicial ==0){
      //Eliminar 0
      document.calculadora.op1.value = ""
   }
   //Concatenar valores de num con los de op1
   document.calculadora.op1.value =
   document.calculadora.op1.value + num;
 }else{
    //Escribir op2
    var valorInicial = document.calculadora.op2.value;
    if(valorInicial ==0){
       //Eliminar 0
       document.calculadora.op2.value = ""
    }
    //Concatenar valores de num con los de op2
    document.calculadora.op2.value =
    document.calculadora.op2.value + num;
 }
}

function operadores(op) {
   operador = op;
}

function borrar() {
   operador = "";
   document.calculadora.op1.value = 0;
   document.calculadora.op2.value = 0;
   document.calculadora.res.value = 0;
}

function igual() {
   var valor1 = document.calculadora.op1.value;
   var valor2 = document.calculadora.op2.value;

   document.calculadora.res.value=eval(valor1+operador+valor2);
}

//Quitar el op2 y res para que funcione como una calculadora de una sola pantalla
