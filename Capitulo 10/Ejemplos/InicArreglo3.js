/* Fig. 10.21: InicArreglo3.js */
/* Inicialización de arreglos multidimensionales. */
function iniciar(){
    var arreglo1 = [
        [ 1 , 2 , 3 ], //fila 0
        [ 4 , 5 , 6 ] // fila 1
    ];
    
    var arreglo2 = [
        [ 1 , 2 ], //fila 0
        [ 3 ], // fila 1
        [ 4 , 5 , 6 ] // fila 2
    ];

    imprimirArreglo("Valores en arreglo1 por fila", arreglo1, document.getElementById("salida1"));
    imprimirArreglo("Valores en arreglo2 por fila", arreglo2, document.getElementById("salida2"));

}

/* mostrar el contenido del arreglo */
function imprimirArreglo(encabezado, elArreglo, salida){
    var resultados = "";

    /* itera a través del conjunto de arreglos unidimensionales */
    for( var fila in elArreglo ){
        resultados += "<ol>";

        /* itera a través de los elementos de cada arreglo unidimensional */
        for( var columna in elArreglo[fila] ){
            resultados += "<li>" + elArreglo[fila][columna] + "</li>";
        }

        resultados += "</ol>";
    }

    salida.innerHTML = resultados;

}

window.addEventListener("load", iniciar, false);