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
var express = require('express')
var router = express.Router()

var Noticia = require('../models/noticia');


// GET / - Retorna todas as noticias
router.get('/', function(req, res, next) {
  Noticia.find().exec(function(err, noticias) {
    if (err) {
      return next(err);
    }

    res.json(noticias);
  });
});

// POST / - Inclui uma nova noticia
router.post('/', function(req, res, next) {
  new Noticia(req.body).save(function(err, noticia) {
    if (err) {
      return next(err);
    }

    res.json(noticia);
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
  Noticia.findById(id).exec(function (err, noticia) { // Busca a noticia pelo id
    if (err) { 
      return next(err); 
    }

    if (!noticia) { // Caso não exista a noticia, lançar um erro
      return next(new Error('Não foi possível encontrar a noticia com o id informado')); 
    }

    req.noticia = noticia; // Adiciona a noticia ao request
    return next(); // Passa o controle para a função apropriada
  });
});

// GET /:id - Retorna a noticia com o id informado
router.get('/:id', function(req, res, next) {
  res.json(req.noticia); // Simplesmente retorna a noticia do request
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
  req.Noticia.update(req.body, function(err, noticia) {
    if (err) {
      return next(err);
    }

    res.json(noticia);
  });
});

module.exports = router; // Exporta o 'router' devidamente configurado
