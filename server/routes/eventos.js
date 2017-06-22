var express = require('express');
var router = express.Router();

var Evento = require('../models/evento');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

router.get('/', function(req, res, next) {
    Evento.find()
        .populate('questionamentos')
        .exec(function(err, eventos) {
            if (err) {
                return next(err);
            }

            res.json(eventos);
        });
});

router.post('/', function(req, res, next) {
    new Evento(req.body).save(function(err, evento) {
        if (err) {
            return next(err);
        }

        res.json(evento._id);
    });
});

router.param('id', function(req, res, next, id) {
    Evento.findById(id)
        .populate('questionamentos')
        .exec(function(err, evento) {
            if (err) {
                return next(err);
            }

            if (!evento) {
                return next(new Error('Não foi possível encontrar a evento com o id informado'));
            }

            req.evento = evento;
            return next();
        });
});

router.get('/:id', function(req, res, next) {
    res.json(req.evento);
});

router.put('/:id', function(req, res, next) {
    Evento.findById(req.params.id, function(err, evento) {
        if (err) {
            return handleError(err);
        } else {
            evento.questionamentos.push(req.body);
            evento.save(function(err, todo) {
                if (err) {
                    res.status(500).json(err);
                }
                res.send(todo);
            });
        }
    });
});

module.exports = router;