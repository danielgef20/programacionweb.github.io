/* 
Fig.10.14: PasoArreglo.js
Paso de arreglos y elementos individuales de arreglos a funciones
 */
function iniciar(){
    var a = [1, 2, 3, 4, 5];

    //pasar todo un arreglo
    imprimirArreglo("Arreglo original: ", a , document.getElementById("arregloOriginal"));
    modificarArreglo(a); //el arreglo a pasado por referencia
    imprimirArreglo("Arreglo modificado: " , a , document.getElementById("arregloModificado"));

    //pasar un elemento individual del arreglo
    document.getElementById("elementoOriginal").innerHTML = "a[3] antes de modificarElemento: " + a[3];
    modificarElemento(a[3]);
    document.getElementById("elementoModificado").innerHTML = "a[3] después de modificarElemento: " + a[3];
}

/* imprime encabezado seguido del contenido de "elArreglo" */
function imprimirArreglo(encabezado, elArreglo, salida){
    salida.innerHTML = encabezado + elArreglo.join(" ");
}

/* funcion que modifica los elementos de un arreglo */
function modificarArreglo(elArreglo){
    for(var j in elArreglo){
        elArreglo[j] *= 2;
    }
}

/* función que modifica el valor que se pasó */
function modificarElemento(e){
    e *= 2; //escala el elemento e sólo mientras dure la función
    document.getElementById("enModificarElemento").innerHTML = "Valor en modificarElemento: " + e;
}

window.addEventListener("load", iniciar, false);