//Lista de 3 jogadores
function jogo(){
    personagem = ["","",""];
    viloes = ["","",""];

    forcaPersonagem = 0;
    forcaViloes = 0;

    for(let i=0; i<3; i++){
        escolhaPersonagem = prompt("Digite o nome do seu personagem "+(i+1));
        personagem[i]= escolhaPersonagem;
        forcaPersonagem+= Math.floor(Math.random()*100)+1;
    }

    alert("Seu time é "+ personagem+"\n Juntos sua força é "+forcaPersonagem)

    for(let i=0; i<3; i++){
        aleatorio = Math.floor(Math.random()*10);
        viloesPossiveis = ["Thanos","Loki ","Magneto","Doutor Destino","Ultron","Galactus","Caveira Vermelha","Venom","Duende Verde","Kang"];
        viloes[i]=viloesPossiveis[aleatorio];
        forcaViloes+= Math.floor(Math.random()*100)+1;
    }

    alert("O time dos vilões é "+viloes+"\n A força deles é "+forcaViloes);

    if(forcaPersonagem>forcaViloes){
      alert("Seu time venceu!!Parabéns")
    }
    else if(forcaPersonagem<forcaViloes){
       alert("Seu time perdeu :( ") 
    }
    else{
       alert("Deu empate")
    }
}
//calcular a força de cada jogador e depois somar a força do time
//calcular a força de cada jogador e depois somar a força do time computador
//comparar quem ganhou
