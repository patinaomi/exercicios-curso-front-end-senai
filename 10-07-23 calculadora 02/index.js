
function somar() {
    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);

    var resultado = num1 + num2;
    
    document.getElementById("recebe").innerHTML = resultado;
}

function subtrair() {
    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);

    var resultado = num1 - num2;

    document.getElementById("recebe").innerHTML = resultado;
}

function multiplicar() {
    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);

    var resultado = num1 * num2;

    document.getElementById("recebe").innerHTML = resultado;
}

function dividir() {
    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);

    var resultado = num1 / num2;

    document.getElementById("recebe").innerHTML = resultado;
}