var mongoose = require('mongoose');
//creando el esquema de usuarios

  var cuentaEsquema = mongoose.Schema({
     num_tarjeta:String,
     saldo:Number,
	 tipo:Number
 });
 
module.exports = mongoose.model('cuentas',cuentaEsquema);

