function tabuada() {
  var t1 = parseInt(document.getElementById("campo1").value);
  var i = 1;
  var texto = "";

  // while(i <=10) {
  //     if(t1 > 10 || t1 < 1) {
  //         alert("erro!");
  //         break;

  //     } else {

  //         var tabuada = i * t1;

  //         document.getElementById("resultado").innerHTML = te xto+=  t1 + " X " + i + " = " + tabuada + "<br>";
  //         i++;
  //     }

  // }

  if (t1 > 10 || t1 < 1) {
    alert("erro!");
  } else {
    for (i = 1; i <= 10; i++) {
      var tabuada = i * t1;

      document.getElementById("resultado").innerHTML = texto +=
        t1 + " X " + i + " = " + tabuada + "<br>";
    }
  }
}
