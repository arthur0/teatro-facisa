var mongoose = require('mongoose');

var FotoTeatroSchema = new mongoose.Schema({
    imagem: String
});

module.exports = mongoose.model('FotoTeatro', FotoTeatroSchema);