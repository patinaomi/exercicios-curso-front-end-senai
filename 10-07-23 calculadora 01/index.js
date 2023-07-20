function calcular() {
    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);
    var op = document.getElementById("campo3").value;
    
    if (op == "+") {
        var resultado = num1 + num2;
    
    } else if (op =="-") {
        var resultado = num1 - num2;
    
    } else if (op =="*") {
        var resultado = num1 * num2;

    } else if (op =="/") {
        var resultado = num1 / num2;

    } else {
        alert("Digite uma operação válida!");
    }
    
    document.getElementById("recebe").innerHTML = resultado;
}