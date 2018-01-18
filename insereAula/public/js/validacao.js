var validaCadastro = function(){
	var resposta = '';

	var usuario = $("#usuario").val();
	var senha = $("#senha").val();
	var nome = $("#nome").val();
	var sobrenome = $("#sobrenome").val();
	var telefone = $("#telefone").val();
	var endereco = $("#endereco").val();
	var estado = $("#estado").val();
	var cidade = $("#cidade").val();

	if(usuario == ""){
		resposta += "Por favor digite seu usuario\n";
	}

	if(senha == ""){
		resposta += "Por favor digite sua senha\n";
	}

	if(nome == ""){
		resposta += "Por favor digite seu nome\n";
	}

	if(sobrenome == ""){
		resposta += "Por favor digite seu sobrenome\n";
		
	}

	if(telefone == ""){
		resposta += "Por favor digite seu telefone\n";
		
	}

	if(endereco == ""){
		resposta += "Por favor digite seu endereco\n";
		
	}

	if(resposta == ''){
		return true;
	}
	else
	{
		alert(resposta);
		return false;
	}	
}

var validaLogin = function(){
	var resposta = '';

	var usuario = $('#usuario').val();
	var senha = $('#senha').val();

	if(usuario == ''){
		resposta += 'Por favor, informe seu usuario\n';
	}
	if(senha == ''){
		resposta += 'Por favor, informe sua senha';
	}

	if(resposta == ''){
		return true;
	}
	else
	{
		alert(resposta);
		return false;
	}
}

var validaCurso = function(){
	var resposta = '';

	var nome = $('#nome').val();
	var link = $('#link').val();

	if(nome == ''){
		resposta += 'Por favor, informe o nome do curso\n';
	}
	if(link == ''){
		resposta += 'Por favor, informe o endereço do curso';
	}

	if(resposta == ''){
		return true;
	}
	else
	{
		alert(resposta);
		return false;
	}
}


