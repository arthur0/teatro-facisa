var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    banner: String,
    questionamentos: []
});

module.exports = mongoose.model('Evento', EventoSchema);
