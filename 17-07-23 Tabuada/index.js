function tabuada() {
  var t1 = parseInt(document.getElementById("campo1").value);
  var i = 1;
  var texto = "";

  /* EXERCÍCIO FEITO USANDO WHILE

  while(i <=10) {
       if(t1 > 10 || t1 < 1) {
           alert("erro!");
           break;

       } else {
           var tabuada = i * t1;

           document.getElementById("resultado").innerHTML = texto+=  t1 + " X " + i + " = " + tabuada + "<br>";
           i++;
       }

    document.getElementById("campo1").value = "";
    campo1.focus();
  } */

  //EXERCÍCIO FEITO USANDO FOR
 if (t1 > 10 || t1 < 1) {
    alert("Digite um número de 1 a 10");
  } else {
    for (i = 1; i <= 10; i++) {
      var tabuada = i * t1;

      document.getElementById("resultado").innerHTML = texto +=
        t1 + " X " + i + " = " + tabuada + "<br>";
    }
  }
  
  //coloquei esse campo em branco para apagar o número que digitamos no campo
  document.getElementById("campo1").value = "";
  campo1.focus();

}
