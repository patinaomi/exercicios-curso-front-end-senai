//ex com erro

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

var pontos = 0;
function impr() {
  var result = "";
  var semordernar = "";
  vetor1 = [5, 3, 10, 1, 24, 8];
  vetor2 = [3, 24, 8, 2, 45, 36];



  for (i = 0; i < 6; i++) {
    bubbleSort(vetor1);
    semordernar += "[" + vetor1[i] + "] ";
  }

  for (i = 0; i < 6; i++) {
    bubbleSort(vetor2);
    result += "[" + vetor2[i] + "] ";
  }

  for (i = 0; i < 6; i++) {
    if (vetor2[i] == vetor1[i]) {
      pontos++;
    }

}

document.getElementById("resultado-cont").innerHTML = pontos;
  document.getElementById("resultado-ordem").innerHTML = semordernar;
  document.getElementById("resultado").innerHTML = result;
}
