/**
 * Esse script contém a implementação de uma API rest para o recurso 'noticias'.
 * Esta é uma API muito padrão que pode ser utilizada por outros recursos com
 * poucas modificações.
 * 
 * +------------+------+-------------------------------------------------+
 * | Verbo HTTP | URL | Função                                           |
 * +------------+------+-------------------------------------------------+
 * | GET        | /    | Retorna todas as noticias                       |
 * | GET        | /:id | Retorna a noticia com o id informado            |
 * | DELETE     | /:id | Remove a noticia com o id informado             |
 * | POST       | /    | Incliu uma nova noticia                         |
 * | PUT        | /:id | Atualiza os dados da noticia com o id informado |
 * +------------+------+-------------------------------------------------+
 */
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

        res.json({ id: pergunta._id });
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

module.exports = router; // Exporta o 'router' devidamente configurado
