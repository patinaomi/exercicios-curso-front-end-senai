var acertos = 0;
var tentativas = 0;

function jogarDado() {
  acertos = 0;

  document.getElementById("resultado").innerHTML = "";

  var numAleatorio1 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio2 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio3 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio4 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio5 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio6 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio7 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio8 = Math.floor(Math.random() * 6 + 1);
  var numAleatorio9 = Math.floor(Math.random() * 6 + 1);

  var dadoResultado1 = document.getElementById("dado1");
  var dadoResultado2 = document.getElementById("dado2");
  var dadoResultado3 = document.getElementById("dado3");
  var dadoResultado4 = document.getElementById("dado4");
  var dadoResultado5 = document.getElementById("dado5");
  var dadoResultado6 = document.getElementById("dado6");
  var dadoResultado7 = document.getElementById("dado7");
  var dadoResultado8 = document.getElementById("dado8");
  var dadoResultado9 = document.getElementById("dado9");

  dadoResultado1.className = "lado" + numAleatorio1;
  dadoResultado2.className = "lado" + numAleatorio2;
  dadoResultado3.className = "lado" + numAleatorio3;
  dadoResultado4.className = "lado" + numAleatorio4;
  dadoResultado5.className = "lado" + numAleatorio5;
  dadoResultado6.className = "lado" + numAleatorio6;
  dadoResultado7.className = "lado" + numAleatorio7;
  dadoResultado8.className = "lado" + numAleatorio8;
  dadoResultado9.className = "lado" + numAleatorio9;

  if (numAleatorio1 == numAleatorio2 && numAleatorio2 == numAleatorio3) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio4 == numAleatorio5 && numAleatorio5 == numAleatorio6) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio7 == numAleatorio8 && numAleatorio8 == numAleatorio9) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio1 == numAleatorio4 && numAleatorio4 == numAleatorio7) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio2 == numAleatorio5 && numAleatorio5 == numAleatorio8) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio3 == numAleatorio6 && numAleatorio6 == numAleatorio9) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio1 == numAleatorio5 && numAleatorio5 == numAleatorio9) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }
  if (numAleatorio3 == numAleatorio5 && numAleatorio5 == numAleatorio7) {
    document.getElementById("resultado").innerHTML = "ACERTOU!!!";
    acertos++;
  }

  document.getElementById("acertos").innerHTML = acertos;
  document.getElementById("tentativa").innerHTML = "";
}

function jogarDadoLoop() {
  tentativas = 0;

  while (acertos < 3) {
    acertos = 0;
    jogarDado();
    tentativas++;
  }
  acertos = 0;
  document.getElementById("tentativa").innerHTML = tentativas;
}
