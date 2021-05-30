/* Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el resultado de dicha suma, 
repitiendo 50 veces esta operación. 
Al final mostrar por pantalla:
a) el array con cada una de las sumas 
b) la suma total de todo el array
c) cuántas ocurrencias hay de cada número
d) cuál es el promedio
e) gracias a la Vicko tenemos más tarea <3  */

function NroRandom (min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
};
let suma = [];
function lazamiento () {
    
    let dado1 = NroRandom (1, 6);
    let dado2 = NroRandom (1, 6);
    
    suma.push(dado1 + dado2);
    console.log(dado1);
    console.log(dado2);    
}
for (i = 0; i<50; i++){
   lazamiento (); 
}
document.write("la suma de los 50 lanzamiento son: " + suma);

function suma_lanzamientos (suma) {
    let sum = 0;
    for(let i=0; i <suma.length; i++){
        sum += suma[i];
    }
    console.log("la suma es: " + sum);
    return sum;
}
const total_lanzamientos = suma_lanzamientos(suma);
document.write("<br>");
document.write("la suma total de lanzamientos es: " + total_lanzamientos+"<br>");

function concurrencia (suma){
    let ocurrencias_array = [];

    for(let i = 1; i <= 12; i++){
        let ocurrencias_nro = 0;
        for (let j = 0; j < suma.length; j++){
            if (suma[j]=== i){
                ocurrencias_nro++;
            }
        }
        ocurrencias_array.push(ocurrencias_nro);
        document.write('Las ocurrencias para ' + i + ' son: ' + ocurrencias_nro + "<br>");
    }
    return ocurrencias_array;
}

const ocurrencia_suma =  concurrencia (suma);
document.write("<br>");

let prom = total_lanzamientos / suma.length;
document.write("El promedio es: "+ prom);