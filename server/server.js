var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

var usuarios = require('./routes/usuarios');
var noticias = require('./routes/noticias');
var eventos = require('./routes/eventos');
var fotos = require('./routes/fotos');
var fotosTeatro = require('./routes/fotosTeatro');
var config = require('./config');

// Autenticação
var expressSession = require('express-session');
var passport = require('passport');
var Strategy = require('passport-local');
var Usuario = require('./models/usuario');

mongoose.connect(config.URL_BANCO_DE_DADOS);

mongoose.connection.once('open', function() {

    console.log("Conexão aberta com sucesso!");
    var app = express();

    // Body Parser MiddleWare
    app.use(logger('dev'));
    app.use(bodyParser.json({ limit: '100mb' }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());


    // Segurança
    var sessionParams = {
        secret: 'Facisa',
        resave: false,
        saveUnitialized: false
    };
    app.use(expressSession(sessionParams));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new Strategy(Usuario.authenticate()));
    passport.serializeUser(Usuario.serializeUser());
    passport.deserializeUser(Usuario.deserializeUser());

    app.use('/api/usuarios', usuarios);
    app.use('/api/noticias', noticias);
    app.use('/api/eventos', eventos);
    app.use('/api/fotos', fotos);
    app.use('/api/fotosTeatro', fotosTeatro);

    app.use(generalErrorHandler);
    app.use(pageForFoundErrorHandler);
    app.use(accessControlAllowOrigin);

    // Inicia o servidor web
    app.listen(config.PORTA_DO_SERVIDOR, function() {
        console.log(`Servidor ouvindo na porta ${config.PORTA_DO_SERVIDOR}`);
        console.log(`Acesse http://localhost:${config.PORTA_DO_SERVIDOR}`);
    });

});



// Funções para tratamento de erro

// Página não encontrada
function pageForFoundErrorHandler(err, req, res, next) {
    if (!err) {
        var err = new Error('Página não encontrada');
        err.status = 404;
        next(err);
    } else {
        next(err);
    }
}

// Erros em geral
function generalErrorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err, message: err.message, stack: err.stack });
}


function accessControlAllowOrigin(err, req, res, next) {
    // Website you wish to allow to connect
    res.header("Access-Control-Allow-Origin", 'http://localhost:8100');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}