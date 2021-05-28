/*  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
 */

function ciudades() {
    var nombres = [];
    var x = prompt("Ingresa un nombre de ciudad:");
       
        while ( x != null && x != 0 ) {
            nombres.push( x +"<br>");
            var x = prompt("Ingresa un nombre de ciudad:");
        }
        nombres.push("Paris");
        nombres[2] = "Barcelona" +"<br>";
        document.write(nombres);
        document.write("<br><br>"+"La cantidad de ciudades son: " + nombres.length+"<br>");
        document.write("La primer posicion de  la lista es: " + nombres[0]);
        document.write("La tercera posicion de la lista es: " + nombres[2]);
        alert ("Elemento que ocupa la segunda posición es : "+ nombres[1]);
        document.write("La ultima posicion de la lista es: " + nombres[nombres.length-1]);
       
        

    }  
    document.write("Listado de ciudades"+"<br><br>");
ciudades();

/*
let nom = [];
let numero = prompt('ingresa un número');

while (numero != null ) {
    nom.push(numero) 
    numero = prompt('ingresa un número')
       
}

document.write(nom)
*/
