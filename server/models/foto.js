var mongoose = require('mongoose');

var FotoSchema = new mongoose.Schema({
    imagem: String
});

module.exports = mongoose.model('Foto', FotoSchema);