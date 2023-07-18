function enquanto() {
  var t1 = parseInt(document.getElementById("campo1").value);
  var resultado = " ";
  var i = 1;

  while (i <= t1) {
    if (i == t1) {
      resultado += i + ". ";
    } else {
      resultado += i + ", ";
    }

    i++;
  }

  document.getElementById("res-enquanto").innerHTML = resultado;
}
