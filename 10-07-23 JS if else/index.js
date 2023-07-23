function botao() {
    var resp = document.getElementById('campo1').value;

    if(resp == "sim") {
        document.getElementById("recebe").innerHTML = "&#128525;";
    } else if (resp == "não") {
        
        document.getElementById("recebe").innerHTML = "&#128531;";
    } else {
        document.getElementById("recebe").innerHTML="Digite uma opção válida.";
        
    }

    
}