function aleatorio() {
  meuVetor = new Array(5);
  var i = 1;

  while (i <= 5) {
    var numAleatorio = Math.round(Math.random() * 100);
    meuVetor[i] = numAleatorio;
    i++;
  }

  var concat = "";

  for (i = 1; i <= 5; i++) {
    concat += "[" + meuVetor[i] + "] ";
  }

  document.getElementById("resultado").innerHTML = concat;
}
