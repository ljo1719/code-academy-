/* Escribir el código de una función que devuelva el texto “Hola Mundo”
Escribir el código de una función que reciba un nombre por parámetro 
(es decir el argumento de la función) y devuelva “Hola <nombre>”
 */

function calentamiento(){
    texto = "Hola Mundo";
    document.write(texto + "<br>")
}
calentamiento();

function saludo (){
    let name = prompt("Escriba su saludo")
    texto = " Hola " + name;
    document.write(texto );
}

saludo();