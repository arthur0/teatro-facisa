var mongoose = require('mongoose');

var FotoSchema = new mongoose.Schema({
    imagem: String,
    linkSocial: String
});

module.exports = mongoose.model('Foto', FotoSchema);