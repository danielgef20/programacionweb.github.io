let numeros = new Array(1000);

function llenarArreglo(){
    for(var i = 0; i < 1000; i++){
        numeros[i] = 1;
    }
}

function iniciar(){
    var resultados = document.getElementById("resultados");
    llenarArreglo();

    primerosElementos();

    multiploIndice();

    imprimir();
}

function primerosElementos(){
    numeros[0] = 0;
    numeros[1] = 0;
}

function multiploIndice(){
    for(var i = 2; i < 1000; i++){
        if(numeros[i] == 1){
            for(var y = i + 1; y < 1000; y++){
                if(y % i == 0) numeros[y] = 0;
            }
        }
        if(i > 2){
            if(i % 2 == 0) numeros[i] = 0;
        }

        if(i > 3){
            if(i % 3 == 0) numeros[i] = 0;
        }
        if(i > 4){
            if(i % 4 == 0) numeros[i] = 0;
        }
        if(i > 5){
            if(i % 5 == 0) numeros[i] = 0;
        }
        if(i > 6){
            if(i % 6 == 0) numeros[i] = 0;
        }
        if(i > 7){
            if(i % 7 == 0) numeros[i] = 0;
        }
        if(i > 8){
            if(i % 8 == 0) numeros[i] = 0;
        }
        if(i > 9){
            if(i % 9 == 0) numeros[i] = 0;
        }
    }
}

function imprimir(){
    
    for(var n in numeros){
        if(numeros[n] == 1){
            resultados.innerHTML += n + " - ";
        }
    }
    tabla += "</tbody></table>"

}

window.addEventListener("load", iniciar, false);