var express = require('express');
var router = express.Router();

var FotoTeatro = require('../models/fotoTeatro');

router.get('/', function(req, res, next) {
    FotoTeatro.find().exec(function(err, fotos) {
        if (err) {
            return next(err);
        }

        res.json(fotos);
    });
});

router.post('/', function(req, res, next) {
    new FotoTeatro(req.body).save(function(err, foto) {
        if (err) {
            return next(err);
        }

        res.json(foto);
    });
});

module.exports = router;