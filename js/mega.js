function obtemJogo(){
	var url="megasenaJogo.html";
	document.getElementById("gerar").value="Aguarde...";
	document.getElementById("gerar").disabled=true;
	requisicaoHTTP("GET",url,true);
}

function trataDados(){
	var conteudo = ajax.responseText;  // obtem a resposta como string
	var numeros = conteudo.split(","); 
	document.getElementById("numsort1").innerHTML=numeros[0];
	document.getElementById("numsort2").innerHTML=numeros[1];
	document.getElementById("numsort3").innerHTML=numeros[2];
	document.getElementById("numsort4").innerHTML=numeros[3];
	document.getElementById("numsort5").innerHTML=numeros[4];
	document.getElementById("numsort6").innerHTML=numeros[5];
	document.getElementById("gerar").value="Gerar jogo";
	document.getElementById("gerar").disabled=false;
}