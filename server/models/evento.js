var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Objectid = Schema.Types.ObjectId;

var EventoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    banner: String,
    questionamentos: [{ type: Schema.Types.ObjectId, ref: 'Pergunta' }]
});

module.exports = mongoose.model('Evento', EventoSchema);
