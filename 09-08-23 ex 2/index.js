function jogarDado() {
  document.getElementById("resultado").innerHTML = "";

  var numAleatorio1 = Math.floor(Math.random() * 3 + 1);
  var numAleatorio2 = Math.floor(Math.random() * 3 + 1);
  var numAleatorio3 = Math.floor(Math.random() * 3 + 1);

  var dadoResultado1 = document.getElementById("dado1");
  var dadoResultado2 = document.getElementById("dado2");
  var dadoResultado3 = document.getElementById("dado3");

  dadoResultado1.className = "lado" + numAleatorio1;
  dadoResultado2.className = "lado" + numAleatorio2;
  dadoResultado3.className = "lado" + numAleatorio3;

  if (numAleatorio1 == numAleatorio2 && numAleatorio2 == numAleatorio3) {
    document.getElementById("resultado").innerHTML = "ACERTOU!";
  }

}
