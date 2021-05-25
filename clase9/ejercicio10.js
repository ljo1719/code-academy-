/*  Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

 let i, z;

 let filas =Number (prompt ("Ingrese nro de filas"));
 let colum = Number (prompt ("Ingrese el nro de columnas"));
 let mult = filas * colum;
 
 document.write ("<table border>")
 for ( i= 0; i < filas; i++) {
     document.write("<tr>");
 
     for ( z = 0; z < colum ; z++) {
         document.write("<td>");
         document.write(mult);
         mult --;
         document.write("</td>");
     }
     document.write("</tr>");
 } 
 document.write("</table>")