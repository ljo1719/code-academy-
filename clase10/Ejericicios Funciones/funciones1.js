/*  Escribir el código de una función a la que se pasa como parámetro un número entero y 
devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

let numero = parseInt(prompt("Introduce un número entero")) ;

function par_impar() {
    
        while (isNaN(numero)){
            numero = prompt(numero + "no es valido. Ingrese otro numero" );
        }
        if (numero % 2 == 0) { return "par";} 
        else { return "impar";}        
    }
let resultado = par_impar();
document.write(" El numero " + numero + " es "+resultado);
