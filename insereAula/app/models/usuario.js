var db = require('../../config/app');

var Usuario = function(){
	this.usuario = '';
	this.senha = '';
	this.nome = '';
	this.sobrenome = '';
	this.telefone = '';
}

Usuario.prototype.salvar = function(callback){	

	db.connect("insert into dbaulas.usuario(nomeUsuario, senhaUsuario, nome, sobrenome, telefone)values('" 
	+ this.usuario + "', '" + this.senha +  "', '" + this.nome + "', '" + this.sobrenome + "', '" + this.telefone + "')", 
	function(err, resultado){
		if(err){
			console.log(err);
			callback('Ocorreu um erro no seu cadastro, pedimos desculpas pelo inconveniente')
		}

		console.log(resultado);
		callback('Cadastro Realizado Com Sucesso');
	});
}

Usuario.autenticar = function(usuario, senha, callback){	

	db.connect("select * from dbaulas.usuario where nomeUsuario ='"+usuario+"' AND senhaUsuario='"+senha+"';", 
	function(err, resultado){
		if(err){
			throw err;
		}
		else
		{
			if(resultado.length > 0){
				callback(resultado);
			}

			else
			{
				callback('incorreto');
			}
		}		
	});
}

module.exports = Usuario;