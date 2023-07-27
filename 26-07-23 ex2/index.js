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
    var pontos = 0;
    
    
    vetor1 = new Array(6);
    vetor2 = new Array(6);
    
    var cont;
    
    
    while(cont != 0) {  
        cont++;
        cont = 0;

        //cria números aleatórios para os vetores
        for(i=0; i<6; i++) {  
            vetor1[i] = Math.floor(Math.random() * 60  + 1);
            vetor2[i] = Math.floor(Math.random() * 60  + 1);

        }
        //elimina números repetidos do vetor 1
        for(i=0; i<6; i++) {
            for(j = 1 + i; j<6; j++) {
                
                if(vetor1[j] == vetor1[i]) {
                    cont++;
                }
            }
        }
        
        //elimina números repetidos do vetor 2
        for(i=0; i<6; i++) {
            for(j = 1 + i; j<6; j++) {
                
                if(vetor2[j] == vetor2[i]) {
                    cont++;
                }
            }
        }
    }

        //contabilizar pontos
        for (i = 0; i < 6; i++) {
          if (vetor2.includes(vetor1[i])) {
            pontos++;
          }
        }
        
        //vetor 1 em ordem
        for(i=0; i<6; i++) {
            bubbleSort(vetor1);
            semordernar += "[" + vetor1[i] + "] ";
        }
        
        //vetor 2 em ordem
        for(i=0; i<6; i++) {
            bubbleSort(vetor2);
            result += "[" + vetor2[i] + "] ";
        }
        
        
        document.getElementById("resultado-ordem").innerHTML = semordernar;
        document.getElementById("resultado").innerHTML = result;
        document.getElementById("resultado-cont").innerHTML = pontos;

}


