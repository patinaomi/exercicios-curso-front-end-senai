function result() {
  var resultCartela = "";
  var resultSorteio = "";
  var resultAcertos = "";
  var cont;
  var megasena = 1;
  var acertos = 0;

  vetorCartela = new Array();

  vetorAcertos = new Array();

  var lin, col, t;

  vetorResultados = new Array();

  while (cont != 0) {
    cont++;
    cont = 0;

    //criação vetor unidimensional - cartela
    for (col = 0; col < 6; col++) {
      vetorCartela[col] = Math.floor(Math.random() * 60 + 1);
    }

    vetorCartela.sort((a, b) => a - b);
    
    //criação vetor bidimensional - resultados
    for (lin = 0; lin < 10; lin++) {
      vetorResultados[lin] = new Array();
      
      for (col = 0; col < 6; col++) {
        vetorResultados[lin][col] = Math.floor(Math.random() * 60 + 1);
      }
    }
    
    //elimina números repetidos do vetor - cartela
    for (lin = 0; lin < 6; lin++) {
      for (j = 1 + lin; j < 6; j++) {
        if (vetorCartela[j] == vetorCartela[lin]) {
          cont++;
        }
      }
    }
    
    //elimina números repetidos do vetor - resultado
    for (lin = 0; lin < 10; lin++) {
      for (col = 0; col < 6; col++) {
        for (l = 1 + col; l < 6; l++) {
          if (vetorResultados[lin][col] == vetorResultados[lin][l]) {
            cont++;
          }
        }
      }
    }
  }

  // apresentação vetor cartela
  for (i = 0; i < 6; i++) {
    resultCartela += "[" + vetorCartela[i] + "] ";
  }

  // apresentação vetor resultados
  for (lin = 0; lin < 10; lin++) {
    resultSorteio += "<h4>Sorteio nº" + megasena + "</h4>";
    for (col = 0; col < 6; col++) {
      resultSorteio += "[" + vetorResultados[lin][col] + "] ";
    }

    resultSorteio += "<br><br><hr>";
    megasena++;
  }

  //contagem acertos
  for (lin = 0; lin < 10; lin++) {
     for (col = 0; col < 6; col++) {
       for (l = 1 + col; l < 6; l++) {
        if(vetorResultados[lin][col] === vetorResultados[lin][l]) {
            
        }
      }
    }
    document.getElementById("resultado-acertos").innerHTML = "novoArray";
     }
   
     
  
  document.getElementById("resultado-cartela").innerHTML = resultCartela;
  document.getElementById("resultado-sorteio").innerHTML = resultSorteio;
}
