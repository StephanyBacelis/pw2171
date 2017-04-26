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
      $('#gender').html(
        "Gender: "+data.results[0].gender
      );
      $('#name').html(
        "Name: "+data.results[0].name.title+" "+
        data.results[0].name.first+" "+
        data.results[0].name.last
      );

      $('#imgFoto').attr('src', data.results[0].picture.large);

      //Location
      $('#street').html(
        "Street: "+data.results[0].location.street
      );
      $('#city').html(
        "City: "+data.results[0].location.city
      );

      $('#state').html(
        "State: "+data.results[0].location.state
      );
      $('#postcode').html(
        "Postcode: "+data.results[0].location.postcode
      );

      $('#email').html(
        "Email: "+data.results[0].email
      );

      //LOGIN
      $('#usernameAndPassword').html(
        "Username: "+data.results[0].login.username+
        " - Password: "+data.results[0].login.password
      );

      $('#salt').html(
        "Salt: "+data.results[0].login.salt
      );

      $('#md5').html(
        "md5: "+data.results[0].login.md5
      );

      $('#sha1').html(
        "sha1: "+data.results[0].login.sha1
      );

      $('#sha256').html(
        "sha256: "+data.results[0].login.sha256
      );

      $('#dob').html(
        "dob: "+data.results[0].dob
      );

      $('#registered').html(
        "Registered: "+data.results[0].registered
      );

      $('#phoneAndCell').html(
        "Phone: "+data.results[0].phone+
        " - Cell: "+data.results[0].cell
      );

      $('#idJson').html(
        "Id: "+data.results[0].id.name+
        " "+data.results[0].id.value
      );

      $('#nat').html(
        "Nat: "+data.results[0].nat
      );

      //INFO
      $('#seed').html(
        "Seed: "+data.results[0].info.seed
      );

      $('#results').html(
        "Results: "+data.results[0].info.results
      );

      $('#page').html(
        "Page: "+data.results[0].info.page
      );

      $('#version').html(
        "Version: "+data.results[0].info.version
      );
    },
    error(a,b,c){
      alert("Sin internet o sin servidor");
    }
  });
}

$('#btnInfo').on('click', datosRandom);
