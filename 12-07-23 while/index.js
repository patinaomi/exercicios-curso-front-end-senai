function enquanto() {
  var t1 = parseInt(document.getElementById("campo1").value);
  var resultado = " ";
  var i = 1;

  
  if (t1 <= 0) {
    alert("Digite um número maior que 1.");
    
  } else {

  while (i <= t1) {
 
      if (i == t1) {
        resultado += i + ". ";
      } else {
        resultado += i + ", ";
      }

      i++;
    }
  }
  
    // para limpar a caixa de texto após digitarmos um número
    document.getElementById("campo1").value = "";
    campo1.focus();

    document.getElementById("res-enquanto").innerHTML = resultado;
  }


