/* Fig. 10.16: Ordenar.js */
/* Ordenar un arreglo mediiante sort. */
function iniciar(){
    var a = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

    imprimirArreglo("Elementos de datos en el orden original: ", a , document.getElementById("arregloOriginal"));
    a.sort(compararEnteros); /* ordenar el arreglo */
    imprimirArreglo("Elementos de datos en orden ascendente: " , a , document.getElementById("arregloOrdenado"));
}

/* imprimir el encabezado seguido del contenido de elArreglo */
function imprimirArreglo(encabezado, elArreglo, salida){
    salida.innerHTML = encabezado + elArreglo.join(" ");
}

/* función de comparación para usar con sort */
function compararEnteros(valor1, valor2){
    return parseInt(valor1) - parseInt(valor2);
}

window.addEventListener("load", iniciar, false);