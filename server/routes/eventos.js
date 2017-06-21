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

var Evento = require('../models/evento');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


// GET / - Retorna todas as noticias
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

// POST / - Inclui um novo evento
router.post('/', function(req, res, next) {
    new Evento(req.body).save(function(err, evento) {
        if (err) {
            return next(err);
        }

        res.json(evento._id);
    });
});

/**
 * Função muito importante. Muitas funções realizam uma mesma tarefa: obtém uma
 * noticia a partir do id passado na url. O express router provê uma forma de 
 * interceptar requisições sempre que um determinado parâmetro for especificado
 * na URL. Nesse caso, sempre que a URL contiver o parâmetro 'id', uma busca
 * será feita ao banco de dados, e a noticia recuperada será adicionada ao 
 * request, para que as funções possam utilizá-la.
 */
router.param('id', function(req, res, next, id) {
    Evento.findById(id)
        .populate('questionamentos')
        .exec(function(err, evento) { // Busca a evento pelo id
            if (err) {
                return next(err);
            }

            if (!evento) { // Caso não exista a evento, lançar um erro
                return next(new Error('Não foi possível encontrar a evento com o id informado'));
            }

            req.evento = evento; // Adiciona a noticia ao request
            return next(); // Passa o controle para a função apropriada
        });
});

// GET /:id - Retorna a noticia com o id informado
router.get('/:id', function(req, res, next) {
    res.json(req.evento); // Simplesmente retorna a noticia do request
});

router.delete('/:id', function(req, res, next) {
    req.Noticia.remove(function(err, noticia) {
        if (err) {
            return next(err);
        }

        res.json(req.noticia);
    });
});

// PUT /:id - Atualiza os dados da noticia com o id informado
router.put('/:id', function(req, res, next) {
    // Evento.update(req.params.id, function(err, evento) {
    //     if (err) {
    //         return next(err);
    //     }

    //     res.json(evento);
    // });
    Evento.update(req.params.id, {
        $push: {
            questionamentos: req.body
        }
    }, function(err, success) {
        if (err) res.status(400).json(err);
        else res.status(200).json({ success: true });
    });
});

module.exports = router; // Exporta o 'router' devidamente configurado