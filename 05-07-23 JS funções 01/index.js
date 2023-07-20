function vogais() {
    document.getElementById("quadro1").innerHTML="A";
    var obj1 = document.getElementById("quadro1");
    obj1.className = "azul";

    document.getElementById("quadro2").innerHTML="B";
    var obj2 = document.getElementById("quadro2");
    obj2.className = "vermelho";

    document.getElementById("quadro3").innerHTML="C";
    var obj3 = document.getElementById("quadro3");
    obj3.className = "verde";

    document.getElementById("quadro4").innerHTML="D";
    var obj4 = document.getElementById("quadro4");
    obj4.className = "amarelo";
}

function romanos() {
    document.getElementById("quadro1").innerHTML="I";
    var obj1 = document.getElementById("quadro1");
    obj1.className = "vermelho";

    document.getElementById("quadro2").innerHTML="II";
    var obj2 = document.getElementById("quadro2");
    obj2.className = "verde";

    document.getElementById("quadro3").innerHTML="III";
    var obj3 = document.getElementById("quadro3");
    obj3.className = "amarelo";

    document.getElementById("quadro4").innerHTML="IV";
    var obj4 = document.getElementById("quadro4");
    obj4.className = "azul";
}

//aqui foi feito uma função diferente para utilizar no grid pois se não alterava as duas tabelas ao mesmo tempo
function vogaisGrid() {
  document.getElementById("grid1").innerHTML = "A";
  var obj1 = document.getElementById("grid1");
  obj1.className = "azul";

  document.getElementById("grid2").innerHTML = "B";
  var obj2 = document.getElementById("grid2");
  obj2.className = "vermelho";

  document.getElementById("grid3").innerHTML = "C";
  var obj3 = document.getElementById("grid3");
  obj3.className = "verde";

  document.getElementById("grid4").innerHTML = "D";
  var obj4 = document.getElementById("grid4");
  obj4.className = "amarelo";
}

function romanosGrid() {
  document.getElementById("grid1").innerHTML = "I";
  var obj1 = document.getElementById("grid1");
  obj1.className = "vermelho";

  document.getElementById("grid2").innerHTML = "II";
  var obj2 = document.getElementById("grid2");
  obj2.className = "verde";

  document.getElementById("grid3").innerHTML = "III";
  var obj3 = document.getElementById("grid3");
  obj3.className = "amarelo";

  document.getElementById("grid4").innerHTML = "IV";
  var obj4 = document.getElementById("grid4");
  obj4.className = "azul";
}