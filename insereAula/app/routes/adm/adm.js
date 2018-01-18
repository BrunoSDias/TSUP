var express = require('express');
var router = express.Router();
var admController = require('../../controllers/adm/adm');

/* GET home page. */
router.get('/insereAula', admController.insereAula);
router.post('/aulaAdicionada', admController.aulaAdicionada);

module.exports = router;
