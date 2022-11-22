let pistaArreglo = new Array(2);
pistaArreglo[0] = new Array(70);
pistaArreglo[1] = new Array(70);

/* for(var x = 0; x < 2; x++){
    for(var y = 0; y < 70; y++){
        pistaArreglo[x][y] = 0;
    }
} */

//tortuga
let xTortuga = 0, yTortuga = 0; //solo cambia y
pistaArreglo[xTortuga][yTortuga] = 1;

//liebre
let xLiebre = 1, yLiebre = 0; //solo cambia y
pistaArreglo[xLiebre][yLiebre] = 2;

/*
Valores en el arreglo:

0 -> Espacio vacio
1 -> Espacio ocupado por la tortuga (t)
2 -> Espacio ocupado por la liebre (H)
3 -> Tortuga modió a la liebre (OUCH!!!)

*/

var campoPista, mensajes;

function iniciar(){
    var boton = document.getElementById("ejecutar");
    campoPista = document.getElementById("pista");
    mensajes = document.getElementById("mensajes");

    boton.addEventListener("click", empezar, false);
}

function reiniciar(){
    for(var x = 0; x < 2; x++){
        for(var y = 0; y < 70; y++){
            pistaArreglo[x][y] = 0;
        }
    }

    xTortuga = 0; 
    yTortuga = 0; //solo cambia y
    pistaArreglo[xTortuga][yTortuga] = 1;

    xLiebre = 1;
    yLiebre = 0; //solo cambia y
    pistaArreglo[xLiebre][yLiebre] = 2;

    mensajes.innerHTML = "";
    campoPista.innerHTML = "";
}

function empezar(){
    
    reiniciar();

    mensajes.innerHTML = "<em>PUM!!<br>Y ARRANCAN!!!</em><br><br>";
    
    //se empieza la carrera
    carrera();

    //¿Quién ganó?
    if(yTortuga == 69){
        mensajes.innerHTML += "<em>LA TORTUGA GANA!!! YAY!!!</em>"
    }
    else if(yLiebre == 69){
        mensajes.innerHTML += "<em>La liebre gana. Que mal.</em>"
    }
    else{
        mensajes.innerHTML += "<em>Es un empate.</em>"
    }

    //Se imprime la pista
    imprimirPista();
}
let ciclos = 0;
function carrera(){
    let i;
    while(yTortuga != 69 || yLiebre != 69){
        ciclos++;
        //tortuga muerde a liebre
        if((yTortuga != 0 && yLiebre != 0) && (yTortuga == yLiebre)){
            pistaArreglo[1][yLiebre] = 3;
            console.log("Mordida: Tortuga -> " + yTortuga + " Liebre -> " + yLiebre);
        }

        //tortuga
        i = Math.floor(1 + Math.random() * 10);
        switch(true){
            case i >= 1 && i <= 5: //50%
                pasoPesadoRapido();
                break;
            case i >= 6 && i <= 7: //20%
                resbalon();
                break;
            case i >= 8 && i <= 10: //30%
                pasoPesadoLento();
                break;
        }

        console.log("Tortuga\nCiclo: " + ciclos + "  Numero: " + i + "\nPosicion: [" + yTortuga + "]");

        
        //liebre
        i = Math.floor(1 + Math.random() * 10);
        switch(true){
            case i >= 1 && i <= 2: //20%
                dormir();
                break;
            case i >= 3 && i <= 4: //20%
                granSalto();
                break;
            case i == 5: //10%
                granResbalon();
                break;
            case i >= 6 && i <= 8: //30%
                pequenoSalto();
                break;
            case i >= 9 && i <= 10: //20%
                pequenoResbalon();
                break;
        }
        console.log("Liebre\nCiclo: " + ciclos + "  Numero: " + i + "\nPosicion: [" + yLiebre + "]");

        if(yTortuga == 69){
            break;
        }
        if(yLiebre == 69){
            break;
        }
    }
}

//Funciones de tortuga
//+3 a la derecha
function pasoPesadoRapido(){
    if(yTortuga >= 67){
        yTortuga = 69;
    }
    else{
        yTortuga += 3;
    }

    if(pistaArreglo[0][yTortuga] == 0)
        pistaArreglo[0][yTortuga] = 1;
}
//-6 a izquierda
function resbalon(){
    if(yTortuga <= 5){
        yTortuga = 0;
    }
    else{
        yTortuga -= 6;
    }
    if(pistaArreglo[0][yTortuga] == 0)
        pistaArreglo[0][yTortuga] = 1;
}
//+1 a derecha
function pasoPesadoLento(){
    yTortuga ++;

    if(pistaArreglo[0][yTortuga] == 0)
        pistaArreglo[0][yTortuga] = 1;
}

//Funciones de liebre
//0 movimientos
function dormir(){
    yLiebre = yLiebre;

    if(pistaArreglo[1][yLiebre] == 0)
        pistaArreglo[1][yLiebre] = 2;
}
//+9 a derecha
function granSalto(){
    if(yLiebre >= 61){
        yLiebre = 69;
    }
    else{
        yLiebre += 9;
    }

    if(pistaArreglo[1][yLiebre] == 0)
        pistaArreglo[1][yLiebre] = 2;
}
//-12 a izquierda
function granResbalon(){
    if(yLiebre <= 11){
        yLiebre = 0;
    }
    else{
        yLiebre -= 12;
    }

    if(pistaArreglo[1][yLiebre] == 0)
        pistaArreglo[1][yLiebre] = 2;
}
//+1 a derecha
function pequenoSalto(){
    yLiebre ++;
    
    if(pistaArreglo[1][yLiebre] == 0)
        pistaArreglo[1][yLiebre] = 2;
}
//-2 a izquierda
function pequenoResbalon(){
    if(yLiebre <= 1){
        yLiebre = 0;
    }
    else{
        yLiebre -= 2;
    }

    if(pistaArreglo[1][yLiebre] == 0)
        pistaArreglo[1][yLiebre] = 2;
}

function imprimirPista(){
    var tabla = "<table><thead>";
    for(var i = 1; i <= 70; i++){
        tabla += "<th>" + i + "</th>";
    }
    tabla += "</thead><tbody>"
    for(var x = 0; x < 2; x++){
        tabla += "<tr>";
        for(var y = 0; y < 70; ++y){
            if(pistaArreglo[x][y] == 0){ //espacio vacio
                tabla += "<td>&emsp;</td>";
            }
            else if(pistaArreglo[x][y] == 1){//posicion de tortuga
                tabla += "<td>T</td>";
            }
            else if(pistaArreglo[x][y] == 2){
                tabla += "<td>H</td>";
            }
            else{
                tabla += "<td>OUCH!!!</td>";
            }
        }
        tabla += "</tr>";
    }
    tabla += "</tbody></table>";

    campoPista.innerHTML = tabla;
}

window.addEventListener("load", iniciar, false);