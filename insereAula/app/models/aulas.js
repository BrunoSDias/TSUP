var db = require('../../config/app');

var Aulas = function(){
	this.nome = '';
	this.link = '';
}

Aulas.prototype.salvar = function(callback){	

	db.connect("insert into dbaulas.aulas(nome, link)values('" 
	+ this.nome + "', '" + this.link +  "')", 
	function(err, resultado){
		if(err){
			console.log(err);
			callback('Ocorreu um erro no seu cadastro, pedimos desculpas pelo inconveniente')
		}
		callback('Aula inserida com sucesso');
	});
}

Aulas.todos = function(callback){	

	db.connect("select * from dbaulas.aulas ", function(err, resultado){
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
				callback('Não há aulas');
			}
		}		
	});
}

module.exports = Aulas;