/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
 */

const meses = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];
let x;

for  ( x = 0; x < meses.length; x++){

    document.write(meses[x]);
    document.write("<br>");
}
