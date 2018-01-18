var express = require('express');
var router = express.Router();
var indexController = require('../../controllers/index/index')

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
