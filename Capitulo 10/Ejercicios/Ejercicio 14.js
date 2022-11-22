let lanzamientos = new Array(6);
lanzamientos[0] = new Array(7);
lanzamientos[1] = new Array(7);
lanzamientos[2] = new Array(7);
lanzamientos[3] = new Array(7);
lanzamientos[4] = new Array(7);
lanzamientos[5] = new Array(7);

let total = [0,0,0,0,0,0,0,0,0,0,0];

function iniciar(){
    var resultado = document.getElementById("resultado");
    var boton = document.getElementById("lanzar");
    var totales = document.getElementById("totales");
    
    reiniciar();

    boton.addEventListener("click", lanzar, false);
}

function lanzar(){
    for(var x = 1; x <= 36000; x++){
        var dado1 = Math.floor(1 + Math.random() * 6);
        var dado2 = Math.floor(1 + Math.random() * 6);
        guardarDados(dado1, dado2);
    }
    
    imprimirLanzamientos();
}

function guardarDados(valor1, valor2){
    lanzamientos[(valor1 - 1)][(valor2 - 1)] += 1;
    var suma = valor1 + valor2;
    switch(suma){
        case 2:
            total[0] ++;
            break;
        case 3:
            total[1] ++;
            break;
        case 4:
            total[2] ++;
            break;
        case 5:
            total[3] ++;
            break;
        case 6:
            total[4] ++;
            break;
        case 7:
            total[5] ++;
            break;
        case 8:
            total[6] ++;
            break;
        case 9:
            total[7] ++;
            break;
        case 10:
            total[8] ++;
            break;
        case 11:
            total[9] ++;
            break;
        case 12:
            total[10] ++;
            break;
    }
}

function imprimirLanzamientos(){
    var tabla = "<table cellspacing='0'><thead><th class='pestana'></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></thead><tbody>";
    for(var x = 0; x < 6; x++){
        tabla += "<tr><td class='pestana'>"+ (x + 1) + "</td>";
        for(var y = 0; y < 6; ++y){
            tabla += "<td>" + lanzamientos[x][y] + "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</tbody></table>";

    resultado.innerHTML = tabla;

    totales.innerHTML = "Número de veces de cada suma:<br>";
    for(var t in total){
        if(total[t] == Math.max(...total))
            totales.innerHTML += "<span style='color:red;'>" + (parseInt(t) + 2) + " &rArr; " + total[t] + "</span><br>";    
        else
            totales.innerHTML += (parseInt(t) + 2) + " &rArr; " + total[t] + "<br>";
    }
}

function reiniciar(){
    for(var x = 0; x < 6; ++x){
        for(var y = 0; y < 7; ++y){
            lanzamientos[x][y] = 0;
        }
    }
}

window.addEventListener("load", iniciar, false);