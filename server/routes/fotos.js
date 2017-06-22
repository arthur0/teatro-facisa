var express = require('express');
var router = express.Router();

var Foto = require('../models/foto');

router.get('/', function(req, res, next) {
    Foto.find().exec(function(err, fotos) {
        if (err) {
            return next(err);
        }

        res.json(fotos);
    });
});


router.post('/', function(req, res, next) {
    new Foto(req.body).save(function(err, foto) {
        if (err) {
            return next(err);
        }

        res.json(foto);
    });
});

router.delete('/:id', function(req, res, next) {
    req.Foto.remove(function(err, foto) {
        if (err) {
            return next(err);
        }

        res.json(req.foto);
    });
});

module.exports = router;