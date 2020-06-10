let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab10');
let Schema = mongoose.Schema;
let modelSchema = new Schema({
	descripcion : { type: String , required: true },
	precio : { type: String , required: true }
});
let model = mongoose.model('productos',modelSchema,'productos');
module.exports = model;
