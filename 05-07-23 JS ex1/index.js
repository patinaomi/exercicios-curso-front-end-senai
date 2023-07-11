function funcao01() {
    // aqui vamos pegar a id que iremos fazer a alteração
    document.getElementById("altera-texto").innerHTML="Texto alterado<b>01</b>";

    //lembrar de criar uma variável
    var obj01 = document.getElementById("id-body");
    obj01.className="alt01";
}

function funcao02() {
    document.getElementById("altera-texto").innerHTML="Texto alterado<b>02</b>";
    var obj01 = document.getElementById("id-body");
    obj01.className="alt02";
}