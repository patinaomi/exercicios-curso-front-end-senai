function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
}

function impr() {
  var result = "";
  var semordernar = "";
  vetor1 = new Array();

  var cont;

  while (cont != 0) {
    cont++;
    cont = 0;

    for (i = 0; i < 10; i++) {
      vetor1[i] = Math.floor(Math.random() * 10 + 1);
    }

    for (i = 0; i < 10; i++) {
      for (j = 1 + i; j < 10; j++) {
        if (vetor1[j] == vetor1[i]) {
          cont++;
          document.getElementById("resultado-cont").innerHTML = cont;
        }
      }
    }
  }

  for (i = 0; i < 10; i++) {
    semordernar += "[" + vetor1[i] + "] ";
  }

  for (i = 0; i < 10; i++) {
    bubbleSort(vetor1);
    result += "[" + vetor1[i] + "] ";
  }
  document.getElementById("resultado-ordem").innerHTML = semordernar;
  document.getElementById("resultado").innerHTML = result;
}
