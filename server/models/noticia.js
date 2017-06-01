var mongoose = require('mongoose');

var NoticiaSchema = new mongoose.Schema({
  titulo: String,
  texto: String,
});

module.exports = mongoose.model('Noticia', NoticiaSchema);