function somar() {
  var t1 = parseInt(document.getElementById("campo1").value);
  var t2 = parseInt(document.getElementById("campo2").value);

  var soma = t1 + t2;

  document.getElementById("resultado-p").innerHTML = soma;
  document.getElementById("resultado-tabela").innerHTML = soma;
  document.getElementById("resultado-div").innerHTML = soma;
  var obj3 = document.getElementById("resultado-div");
  obj3.className = "resultado-container";

  var resultado = (document.getElementById("resultado-campo").value = soma);
}
