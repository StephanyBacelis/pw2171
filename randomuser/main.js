//const app = require('electron').app
//const BrowserWindow = require('electron').BrowserWindow
//Es equivalente a lo de arriba xd.
const {app, BrowserWindow} = require('electron');
//Ruta en donde se encuentra nuestro proyecto
const path = require('path');
//Ruta pero en formato url
const url = require('url');

//Es igual que una const o var, en ES6
let PantallaPrincipal;

//La aplicacion ejecuta este evento cuando el archivo
// main.js se carga en memoria.
function muestraPantallaPrincipal() {
  PantallaPrincipal = new BrowserWindow({
    width:1024,
    height:768
  });

  PantallaPrincipal.on('closed', function (){
    PantallaPrincipal = null;
  });

  PantallaPrincipal.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
  PantallaPrincipal.show();
}

app.on('ready', muestraPantallaPrincipal);
