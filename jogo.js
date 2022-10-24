  
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel == 'Normal'){
	// 1500
	var criaMosquitoTempo = 1500
} else if (nivel === 'Dificil'){
  // 1000
  var criaMosquitoTempo = 1000
} else if (nivel === 'Gremio') {
	//650
	var criaMosquitoTempo = 650
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function PosicaoRandomica() {	
	if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()

	if(vidas > 3) {
		window.location.href = "gameover.html"
	} else {document.getElementById('v' + vidas).src = "../imagens/coracao_vazio.png"
	vidas ++}	
// Remover mosquito depois de um tempo 

}
// Criar um mosquito aleatorio na tela
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoY = posicaoY < 0 ? 0 : posicaoY
posicaoX = posicaoX < 0 ? 0 : posicaoX

console.log(posicaoX,posicaoY)

// Criar elemento aleatorio
var mosquito = document.createElement('img')
mosquito.src = './imagens/mosca.png'
mosquito.className = TamanhhoAleatorio() + ' ' + LadoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}
document.body.appendChild(mosquito)
}

// Tamanhos aleatorios para os mosquitos
function TamanhhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	switch(classe) {
		case 0 :
			return 'mosquito1' 
		case 1 :
			return 'mosquito2' 
		case 2 :
			return 'mosquito3' 
	}
}
function  LadoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	switch(classe) {
		case 0 :
			return 'ladoa' 
		case 1 :
			return 'ladob' 

	}
}
