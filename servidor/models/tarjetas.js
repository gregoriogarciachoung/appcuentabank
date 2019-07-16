var mongoose = require('mongoose');
//creando el esquema de usuarios

 var tarjetaEsquema = mongoose.Schema({
     numero:String,
	 clave:String
 });

module.exports = mongoose.model('tarjetas',tarjetaEsquema);


