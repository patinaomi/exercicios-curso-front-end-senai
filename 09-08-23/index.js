function jogarDado() {
  var numAleatorio = Math.floor(Math.random() * 6 + 1);
  var dadoResultado = document.getElementById("dado");

  if (numAleatorio == 1) {
    dadoResultado.className = "lado1";
  }

  if (numAleatorio == 2) {
    dadoResultado.className = "lado2";
  }

  if (numAleatorio == 3) {
    dadoResultado.className = "lado3";
  }

  if (numAleatorio == 4) {
    dadoResultado.className = "lado4";
  }

  if (numAleatorio == 5) {
    dadoResultado.className = "lado5";
  }

  if (numAleatorio == 6) {
    dadoResultado.className = "lado6";
  }
}
