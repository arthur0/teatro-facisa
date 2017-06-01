var mongoose = require('mongoose');

var passportLocal = require('passport-local-mongoose');

var Usuario = mongoose.Schema({
    nome: String,
    senha: String
});

Usuario.plugin(passportLocal);

module.exports = mongoose.model('Usuario', Usuario);