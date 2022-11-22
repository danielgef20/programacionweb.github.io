//matriz de dibujo
let piso = new Array(20);
for(var x = 0; x < 20; x++){
    piso[x] = new Array(20);
}

//lista de comandos
let lista = [];

//valor de pluma, por defecto arriba(1)
let upDown = 1;
//direccion a donde está viendo la tortuga (0_arriba; 1_derecha; 2_abajo; 3_izquierda)
let direccion = 1;

//posicion de la tortuga anterior
let filaTortuga = 0, columTortuga = 0;
//posicion nueva
let nFilaTortuga = 0, nColumTortuga = 0;

var botonEjecutar, botonPluma, botonGirar, botonAvanzar, botonImprimir, botonFinal, botonReinicar;

function reinicar(){
    for(var x = 0; x < 20; x++){
        for(var y = 0; y < 20; y++){
            piso[x][y] = 0;
        }
    }
    filaTortuga = 0;
    columTortuga = 0;
    nFilaTortuga = 0;
    nColumTortuga = 0;
    direccion = 1;
    upDown = 1;
    lista = [];
    botonPluma.disabled = false;
    botonGirar.disabled = false;
    botonAvanzar.disabled = false;
    botonImprimir.disabled = false;
    botonFinal.disabled = false;
    botonEjecutar.disabled = true;
    botonReinicar.disabled = true;
    
    listaComandos.innerHTML = "";
    resultado.innerHTML = "";
    document.getElementById("finDibujo").innerHTML = "";

    imprimirMatriz();
}
function iniciar(){
    botonPluma = document.getElementById("agregarPluma");
    botonGirar = document.getElementById("agregarGiro");
    botonAvanzar = document.getElementById("avanzarEspacios");
    botonImprimir = document.getElementById("imprimir");
    botonFinal = document.getElementById("final");

    botonEjecutar = document.getElementById("ejecutar");

    botonReinicar = document.getElementById("reiniciar");

    botonEjecutar.disabled = true;
    botonReinicar.disabled = true;

    var listaComandos = document.getElementById("listaComandos");
    var resultado = document.getElementById("resultado");

    botonPluma.addEventListener("click", agregarPluma, false);
    botonGirar.addEventListener("click", agregarGirar, false);
    botonAvanzar.addEventListener("click", agregarAvanzar, false);
    botonImprimir.addEventListener("click", agregarImprimir, false);
    botonFinal.addEventListener("click", agregarFinal, false);

    reinicar();
    
    botonEjecutar.addEventListener("click", ejecutarComandos, false);
    botonReinicar.addEventListener("click", reinicar, false);
}

function seleccionado(nombre){
    for(let i = 1; i <= 2; i++){
        if(document.getElementById(nombre+i).checked){
            return document.getElementById(nombre+i);
        }
    }
}

function agregarPluma(){
    var selec = seleccionado("pluma").value
    listaComandos.innerHTML += "" + selec + "<br>";
    lista.push(selec);
}
function agregarGirar(){
    var selec = seleccionado("giro").value
    listaComandos.innerHTML += "" + selec + "<br>";
    lista.push(selec);
}
function agregarAvanzar(){
    var campoAvanzar = document.getElementById("campoAvanzar");
    var espacios = parseInt(campoAvanzar.value);
    
    if(espacios > 0){
        listaComandos.innerHTML += "5, " + espacios + "<br>";
        espacios = "5" + espacios;
        lista.push(espacios);
    }
    
}
function agregarImprimir(){
    listaComandos.innerHTML += "" + 6 + "<br>";
    lista.push(6);
}
function agregarFinal(){
    listaComandos.innerHTML += "" + 9 + "<br>";
    lista.push(9);
    botonEjecutar.disabled = false;
}

function ejecutarComandos(){
    botonPluma.disabled = true;
    botonGirar.disabled = true;
    botonAvanzar.disabled = true;
    botonImprimir.disabled = true;
    botonFinal.disabled = true;
    botonEjecutar.disabled = true;
    botonReinicar.disabled = false;

    var valor = "";
    var temp = 0;
    for(var comando in lista){
        valor = lista[comando].toString();
        switch(true){
            case valor == "1":
                upDown = 1;
                break;
            case valor == "2":
                upDown = 2;
                break;
            case valor == "3":
                if(direccion == 3) direccion = 0;
                else direccion++;
                break;
            case valor == "4":
                if(direccion == 0) direccion = 3;
                else direccion--;
                break;
            case valor[0] == "5":
                temp = parseInt(valor.slice(1));
                avanzar(temp);
                break;
            case valor == "6":
                imprimirMatriz();
                break;
            case valor == "9":
                finProceso();
                break;
        }
    }
}

function avanzar(casillas){
    switch(direccion){
        case 0: //arriba
            if(filaTortuga - casillas < 0) nFilaTortuga = 0;
            else nFilaTortuga = filaTortuga - casillas;
            dibujar();
            break;
        case 1: //derecha
            if(columTortuga + casillas > 19) nColumTortuga = 19;
            else nColumTortuga = columTortuga + casillas;
            dibujar();
            break;
        case 2: //abajo
            if(filaTortuga + casillas > 19) nFilaTortuga = 19;
            else nFilaTortuga = filaTortuga + casillas;
            dibujar();
            break;
        case 3: //izquierda
            if(columTortuga - casillas < 0) nColumTortuga = 0;
            else nColumTortuga = columTortuga - casillas;
            dibujar();
            break;
    }


}

function dibujar(){
    switch(direccion){
        case 0: //arriba
            for(var fila in piso){
                if(fila <= filaTortuga && fila >= nFilaTortuga){
                    if(upDown == 2){
                        piso[fila][columTortuga] = 1;
                    }
                }
            }
            columTortuga = nColumTortuga;
            filaTortuga = nFilaTortuga;
            break;
        case 1: //derecha
            for(var col in piso){
                if(col >= columTortuga && col <= nColumTortuga){
                    if(upDown == 2){
                        piso[filaTortuga][col] = 1;
                    }
                }
            }
            columTortuga = nColumTortuga;
            filaTortuga = nFilaTortuga;
            break;
        case 2: //abajo
            for(var fila in piso){
                if(fila >= filaTortuga && fila <= nFilaTortuga){
                    if(upDown == 2){
                        piso[fila][columTortuga] = 1;
                    }
                }
            }
            columTortuga = nColumTortuga;
            filaTortuga = nFilaTortuga;
            break;
        case 3: //izquierda
            for(var col in piso){
                if(col <= columTortuga && col >= nColumTortuga){
                    if(upDown == 2){
                        piso[filaTortuga][col] = 1;
                    }
                }
            }
            columTortuga = nColumTortuga;
            filaTortuga = nFilaTortuga;
            break;
    }
}

function imprimirMatriz(){
    var tabla = "<table><thead>";
    for(var i = 0; i < 20; i++){
        tabla += "<th>" + i + "</th>";
    }
    tabla += "</thead><tbody>"
    for(var x = 0; x < 20; x++){
        tabla += "<tr>";
        for(var y = 0; y < 20; ++y){
            if(piso[x][y] == 0)
                tabla += "<td>&emsp;</td>";
            else
                tabla += "<td>*</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</tbody></table>";

    resultado.innerHTML = tabla;
}

function finProceso(){
    document.getElementById("finDibujo").innerHTML = "¡Fin del dibujo!";
}

window.addEventListener("load", iniciar, false);

/*

[
        0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9    
    0  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    1  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    2  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    3  [0,0,*,0,0,0,*,0,0,0,0,0,0,0,0,0,0,0,0,0],
    4  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    5  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    6  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    7  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    8  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    9  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    10 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    11 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    12 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    13 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    14 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    15 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    16 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    17 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    18 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    19 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

*/