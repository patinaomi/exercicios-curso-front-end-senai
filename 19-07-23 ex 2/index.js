function aleatorio() {
  meuVetor = new Array(8);
  var i = 1;
  var result = "";
  var somaVetor = 0;
  var multVetor = 0;
  var resultTabela = "";

  for (i = 1; i <= 8; i++) {
    var numAleatorio = Math.round(Math.random() * 20);
    meuVetor[i] = numAleatorio;
  }

  for (i = 1; i <= 8; i++) {
    // todos os elementos do vetor
    result += "[" + meuVetor[i] + "] ";

    // soma de vetores
    somaVetor += meuVetor[i];

    //mult de vetores
    multVetor = meuVetor[1] + " X " + meuVetor[8] + " = " + meuVetor[1] * meuVetor[8];

    //resultado na tabela
    resultTabela += "<td>" + meuVetor[i] + "</td>";
  }

  document.getElementById("resultado").innerHTML = result;
  document.getElementById("soma").innerHTML = somaVetor;
  document.getElementById("produto").innerHTML = multVetor;
  document.getElementById("tabela").innerHTML =
    "<table border=3 align=center> <tr>" + resultTabela + "</tr> </table>";
}
