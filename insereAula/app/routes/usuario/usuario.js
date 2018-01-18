var express = require('express');
var router = express.Router();
var usuarioController = require('../../controllers/usuario/usuario');
//var admController = require('../../controllers/adm/adm');

router.get('/login', usuarioController.login);
router.get('/cadastrar', usuarioController.cadastrar);
router.post('/realizaCadastro', usuarioController.realizaCadastro);
router.post('/fazer-login', usuarioController.fazerLogin);
//router.get('/insereAula', admController.insereAula);


module.exports = router;