const rq = require('electron-require');
const main = rq.remote('./main.js');
//jquery().on or .off para desactivar la función
/*
$ <- significa jquery (es un alias)
*/
const $ = require('jquery');


var buscarCiudad = function(){
  var ciudad = $('#txtCiudad').val();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  if(ciudad == ""){
    alert("Ingrese una ciudad");
    $('#txtCiudad').focus();
    return //Ya no continua con la función
  }

  url=url+ciudad+'&APPID=4c161114a189a1dab2b3a32e427a4d63';

  $.ajax({
    dataType: "json",
    url: url,
    success: function(response){
      if(response.cod==200){

        $('#idAndName').html('Id: '+response.id+' </br> Ciudad: <b>'+response.name+'</b> </br>');

        $('#coords').html('Longitud: '+response.coord.lon+ ' - Latitud: '+response.coord.lat);

        $('#main-weather').html('Icono '+response.weather[0].icon+' ID: '+ response.weather[0].id+' Clima: '+
          response.weather[0].main+' - '+response.weather[0].description);

        $('#base').html('</br> Base: '+response.base);

        $('#temps').html('Temperatura: '+response.main.temp+' con mínima de '+response.main.temp_min+
          ' y máxima de '+response.main.temp_max);

        $('#pressureAndHumidity').html('Presión: '+response.main.pressure+' y Humedad: '+response.main.humidity)

        $('#visibility').html('Visibilidad: '+response.visibility);

        $('#wind').html('Velocidad del viento: '+response.wind.speed+ ' - Deg: '+response.wind.deg);

        $('#clouds').html('</br> Nubes: '+response.clouds.all);

        $('#dt').html('Date-Time: '+ response.dt);

        $('#typeAndId').html('Tipo: '+response.sys.type+ ' - ID: '+response.sys.id);

        $('#message').html('Aviso: '+response.sys.message);

        $('#country').html(' País: '+response.sys.country);

        $('#sunriseAndSunset').html('Amanecer: '+response.sys.sunrise+' Puesta del sol: '+response.sys.sunset);

      }
    }
  });

  $("#txtCiudad").val("");
  $("#txtCiudad").focus();
}

var teclaCiudad = function(tecla){
  if(tecla.which == 13){
    buscarCiudad();
  }
}


//Posiciona el cursor en el cuadro del texto
$('#txtCiudad').focus();

//Evento del botón al presionar Enter
$("#txtCiudad").on("keypress", teclaCiudad);

//Evento del botón btnBuscar-click
$('#btnBuscar').on('click', buscarCiudad);
