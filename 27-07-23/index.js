function result() {
  var resultCartela = "";
  var resultSorteio = "";
  var resultAcertos = "";
  var cont;
  var megasena = 1;
  var acertos = 0;

  vetorCartela = new Array();

  var lin, col, t;

  vetorResultados = new Array();

  while (cont != 0) {
    cont++;
    cont = 0;

    //criação vetor unidimensional - cartela
    for (lin = 0; lin < 6; lin++) {
      vetorCartela[lin] = Math.floor(Math.random() * 60 + 1);
    }
    vetorCartela.sort();

    //criação vetor bidimensional - resultados
    for (lin = 0; lin < 10; lin++) {
      vetorResultados[lin] = new Array();

      for (col = 0; col < 6; col++) {
        vetorResultados[lin][col] = Math.floor(Math.random() * 60 + 1);
      }
    }
    vetorResultados.sort();

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
    resultSorteio += "Resultado Sorteio <br>" + megasena + "<br>";
    for (col = 0; col < 6; col++) {
      resultSorteio += "[" + vetorResultados[lin][col] + "] ";
    }

    resultSorteio += "<br><hr>";
    megasena++;
  }




  document.getElementById("resultado-cartela").innerHTML = resultCartela;
  document.getElementById("resultado-sorteio").innerHTML = resultSorteio;
  document.getElementById("resultado-acertos").innerHTML = resultAcertos;
}
