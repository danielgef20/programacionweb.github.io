let numeros = [];

function iniciar(){
    var boton = document.getElementById("botonCalcular");
    var campoNumero = document.getElementById("campoNumero");
    var campoValor = document.getElementById("campoValor");
    var mensajes = document.getElementById("mensajes");
    var resultado = document.getElementById("resultado");

    boton.addEventListener("click", validar, false);
}

function validar(){
    if(numeros.length == 10){
        mensajes.innerHTML = "Ya se han ingresado 10 valores."
    }
    else{
        resultado.innerHTML = "";
        var valorIngresado = parseInt(campoValor.value);
        if(valorIngresado >= 10 && valorIngresado <= 100){
            guardarDato(valorIngresado);
            imprimirDatos();
        }
        else{
            mensajes.innerHTML = "¡Valor inválido!";
        }
    }
}

function guardarDato(valor){
    if(numeros.indexOf(valor) == -1){
        mensajes.innerHTML = "¡Nuevo valor ingresado!";
        numeros.push(valor);
    }
    else{
        mensajes.innerHTML = "¡Valor duplicado!";
        numeros.push(0);
    }
}

function imprimirDatos(){
    for(var n in numeros){
        if(numeros[n] != 0){
            resultado.innerHTML += numeros[n] + "<br>";
        }
    }
}

window.addEventListener("load", iniciar, false);