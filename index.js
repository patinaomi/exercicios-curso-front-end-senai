function vetores() {
  var i, j;
  var iMax = 5;
  var jMax = 7;

  var f = new Array();

  for (i = 0; i < iMax; i++) {
    f[i] = new Array();

    for (j = 0; j < jMax; j++) {
      f[i][j] = "[" + Math.round(Math.random() * 60) + "]";
    }
  }

  var text = "";

  for (i = 0; i < iMax; i++) {
    for (j = 0; j < jMax; j++) {
      text += f[i][j];
    }
    text += "<br>";
  }

  document.getElementById("resultado").innerHTML = text;
}
