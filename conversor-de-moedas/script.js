function conversorw(){
  valorwons = prompt("Digite o valor em wons:");
  won = 0.004;
  result = valorwons * won;
  alert("O valor convertido é R$" + result.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) );
}

function conversord(){
  valordolar = prompt("Digite o valor em dolar:");
  dolar=5.75;
  result= valordolar * dolar;
  alert("O valor convertido é R$" + result.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) );
}

function conversore(){
  valoreuro = prompt("Digite o valor em euro:");
  euro=6.17;
  result=valoreuro * euro;
  alert("O valor convertido é R$" +result.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) );
}
