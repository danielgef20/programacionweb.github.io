/* Fig. 10.18: buscar.js */
/* Buscar en un arreglo mediante indexOf */
var a = new Array(100);

/* Llenar el arreglo con valores enteros pares de 0 a 198 */
for(var i = 0; i < a.length; ++i){
    a[i] = 2 * i;
}

/* la función se invoca cuando se presiona el botón "Buscar" */
function botonPresionado(){
    /* Obtener el campo de texto de entrada */
    var valEntrada = document.getElementById("valEntrada");

    /* Obtener el párrafo de resultado */
    var resultado = document.getElementById("resultado");

    /* Obtener la calve de búsqueda del campo de texto de entrada y luego realizar la búsqueda */
    var claveBusqueda = parseInt(valEntrada.value);
    var elemento = a.indexOf(claveBusqueda);

    if(elemento != -1){
        resultado.innerHTML = "Se encontró el valor en el elemento " + elemento;
    }
    else{
        resultado.innerHTML = "No se encontró el valor";
    }
}

/* registra el manejador de eventos de clic de botonBuscar */
function iniciar(){
    var botonBuscar = document.getElementById("botonBuscar");
    botonBuscar.addEventListener("click", botonPresionado, false);
}

window.addEventListener("load", iniciar, false);