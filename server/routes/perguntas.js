var express = require('express');
var router = express.Router();

var Pergunta = require('../models/pergunta');

router.get('/', function(req, res, next) {
    Pergunta.find().exec(function(err, pergunta) {
        if (err) {
            return next(err);
        }

        res.json(pergunta);
    });
});

router.post('/', function(req, res, next) {
    new Pergunta(req.body).save(function(err, pergunta) {
        if (err) {
            return next(err);
        }

        res.json(pergunta);
    });
});

router.delete('/:id', function(req, res, next) {
    req.Pergunta.remove(function(err, pergunta) {
        if (err) {
            return next(err);
        }

        res.json(req.pergunta);
    });
});

module.exports = router;