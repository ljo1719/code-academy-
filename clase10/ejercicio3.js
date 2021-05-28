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

function lazamiento () {
    
    let dado1 = NroRandom (1, 6);
    let dado2 = NroRandom (1, 6);
    let suma = [];
    suma.push(dado1 + dado2);
    
    console.log(dado1);
    console.log(dado2);
    console.log("****");
    console.log(suma);
    console.log("****");
    document.write(suma);
}
for (i = 0; i<50; i++){
   lazamiento (); 
}





