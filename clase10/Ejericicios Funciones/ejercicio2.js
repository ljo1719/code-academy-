/* Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
 */

let texto = prompt("Ingrese cadena de texto");

function informacion (texto){

    if(texto == texto.toUpperCase()) {
        document.write (" La cadena está formada sólo por mayúsculas") ;
      }
      else if (texto == texto.toLowerCase()) {
        document.write (" La cadena está formada sólo por minúsculas") ;
      } 
      else {document.write ("La cadena está formada por minúsculas y mayusculas")}
}

informacion(texto);