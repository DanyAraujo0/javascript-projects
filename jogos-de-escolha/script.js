function jogo1(){
    rodada = 1;
    while(rodada<=3){
        console.log("Rodada "+rodada);
        escolhaJogador = prompt("Nivel "+rodada+" \n Porta 1, 2 ou 3");
        if(escolhaJogador<1 || escolhaJogador>3){
            alert("Valor invalido somente 1, 2 ou 3")
            rodada=1000;
        }
        else{
            pisoQuebrado = Math.floor(Math.random()*3)+1;
        if(escolhaJogador == pisoQuebrado){
            alert("Porta errada!")
            rodada=1000;
        }
        else{
            alert("Passou! A porta errada era "+pisoQuebrado)
            }
        }
        rodada=rodada+1;
        if(rodada>=1000){
            venceu=0;
        }
        else{
            venceu=1;
        }
        }
        if(venceu == 1){
            alert("Você VENCEU!! Parabens escolheu certo")
        }
        else{
            alert("Você escolheu a porta errada e perdeu!")
        }
}

function jogo2(){
  escolhaJogador = prompt("Faça uma escolha e tente vencer \n 1-Pedra, 2-Papel ou 3-Tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  if (escolhaJogador == escolhaComputador) {
    alert("Empate!!");
  } 
  else if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("Você PERDEU :( \n computador escolheu papel");
    } 
    else {
      alert("Você VENCEU :) \n computador escolheu tesoura");
    }
  } 
  else if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      alert("Você VENCEU :) \n computador escolheu pedra");
    } 
    else {
      alert("Você PERDEU :( \n computador escolheu tesoura");
    }
  } 
  else if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      alert("Você PERDEU :) \n computador escolheu pedra");
    } 
    else {
      alert("Você VENCEU :( \n computador escolheu papel");
    }
}
}
