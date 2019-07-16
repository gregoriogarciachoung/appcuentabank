//REFERENCIANDO LOS MODULOS
var express =  require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');


//mis modulos
var config = require('./config');
//var usuarioControlador = require('./controllers/usuarios');
var tarjetaControlador = require('./controllers/tarjetas');
var cuentaControlador = require('./controllers/cuentas');
//var pruebaControlador = require('./controllers/pruebas');
//var sagausuarioControlador = require('./controllers/sagausuarios');
var pruebaControlador = require('./controllers/pruebas');
//conectar a la BD

mongoose.connect(config.con,function(err){
    if (err)
    {
        console.log('Error de conexion con la BD');
    }
    else
    {
        console.log('Conexion correcta!!');
    }
});



 //creando el servidor express
 var app = express();
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({ extended: false }));
 
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

 //configurar el routing

 var router = express.Router();
 /*
 //usuarios
 router.route('/usuarios')
 .post(usuarioControlador.agregar)
 .get(usuarioControlador.listar)
  router.route('/rbuscaUsuario')
 .post(usuarioControlador.login1)
   router.route('/rbuscaUsuarioo')
 .post(usuarioControlador.login2)
   router.route('/actualizarClave')
 .post(usuarioControlador.actualizarClave);
 
 //tarjetas
 router.route('/tarjetas')
 .get(tarjetaControlador.listar)
 .post(tarjetaControlador.agregar);
 router.route('/rsaldoXTarj')
  .post(tarjetaControlador.saldoXTarj)
 router.route('/actualizarSaldo')
 .post(tarjetaControlador.actualizarSaldo);
  
 //cuentas
  router.route('/cuentas')
 .get(cuentaControlador.listar)
 .post(cuentaControlador.agregar);
 
 //pruebas
 router.route('/pruebas')
 .post(pruebaControlador.agregar)
 .get(pruebaControlador.listar)
*/
  //saga usuarios
 /*router.route('/crear')
 .post(sagausuarioControlador.agregar)
 router.route('/listar')
 .get(sagausuarioControlador.listar)
 router.route('/login')
 .post(sagausuarioControlador.login)
 router.route('/login2')
 .post(sagausuarioControlador.login2)
*/
  router.route('/pruebas')
  .get(pruebaControlador.listar)
  .post(pruebaControlador.agregar)
  
  router.route('/tarjetas')
  .get(tarjetaControlador.listar)
  .post(tarjetaControlador.agregar)
  
  router.route('/cuentas')
  .get(cuentaControlador.listar)
  .post(cuentaControlador.agregar)
  
  router.route('/cuentasXTarjeta')
  .post(cuentaControlador.cuentasXTarjeta)

 app.use('/api',router);
 app.use(express.static(__dirname + '/public'));
 app.listen(3000);