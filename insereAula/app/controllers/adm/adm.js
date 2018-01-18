var AulaModel = require('../../models/aulas')

var admController = {
	insereAula: function(req, res, next){
		if (req.cookies.autenticado) {
			res.render('insereAula', {areaAdm:'ok'});	
		}
		else
		{
			res.redirect('/usuario/login');					
		}	
	},
	aulaAdicionada: function(req, res, next){
		var aula = new AulaModel();

		aula.nome = req.body.nome;
		aula.link = req.body.link;

		aula.salvar(function(resposta){
			res.render('resultado', {resposta : resposta})
		})		
	}
}

module.exports = admController;