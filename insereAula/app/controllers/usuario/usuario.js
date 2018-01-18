var UsuarioModel = require('../../models/usuario')

var usuarioController = {
	login: function(req, res, next){
		if (req.cookies.autenticado) {
			res.redirect('/');
		}
		else
		{
			res.render('login',{resposta:{},});
		}
	},
	cadastrar: function(req, res, next){
		var areaAdm = '';
		if (req.cookies.autenticado) {
			areaAdm = 'ok';
		}
		res.render('cadastrar', {title: 'Cadastro de Usuarios', areaAdm:areaAdm});
	},

	realizaCadastro: function(req, res, next){
		var usuario = new UsuarioModel();

		usuario.usuario = req.body.usuario;
		usuario.senha = req.body.senha;
		usuario.nome = req.body.nome;
		usuario.sobrenome = req.body.sobrenome;
		usuario.telefone = req.body.telefone;

		usuario.salvar(function(resposta){
			res.render('resultado', {resposta : resposta});
		})
	},

	fazerLogin: function(req, res, next){

		var usuario = req.body.usuario;
		var senha = req.body.senha;

		UsuarioModel.autenticar(usuario, senha, function(resposta){
			if(resposta=='incorreto'){
				res.render('login', {resposta:'incorreto'})
			}
			else{
				var cookie = "autorizado";
				res.cookie('autenticado', cookie, {httpOnly: true})
				res.redirect('/adm/insereAula');
			}
		})
	}	
}

module.exports = usuarioController;