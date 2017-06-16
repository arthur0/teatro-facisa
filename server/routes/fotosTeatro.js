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

var FotoTeatro = require('../models/fotoTeatro');


// GET / - Retorna todas as fotos
router.get('/', function(req, res, next) {
    FotoTeatro.find().exec(function(err, fotos) {
        if (err) {
            return next(err);
        }

        res.json(fotos);
    });
});

// POST / - Inclui uma nova foto
router.post('/', function(req, res, next) {
    new FotoTeatro(req.body).save(function(err, foto) {
        if (err) {
            return next(err);
        }

        res.json(foto);
    });
});

module.exports = router; // Exporta o 'router' devidamente configurado