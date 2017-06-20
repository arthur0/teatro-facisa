var mongoose = require('mongoose');

var PerguntaSchema = new mongoose.Schema({
    descricao: String,
    tipo: String,
    questoes: []
});

module.exports = mongoose.model('Pergunta', PerguntaSchema);
