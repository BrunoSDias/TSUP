var AulaModel = require('../../models/aulas')

var indexController = {
	index: function(req, res, next){	
		var areaAdm = '';
			if (req.cookies.autenticado) {
				areaAdm = 'ok';
			}
		AulaModel.todos(function(resposta){
			console.log(resposta);
			res.render('index', {resposta:resposta, areaAdm:areaAdm});
		});  		
	}
}

module.exports = indexController;