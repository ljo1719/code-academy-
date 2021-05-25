/*  Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

let i , z;

for ( i = 1; i <= 30; i++ ){

   for ( z = 0; z < i; z++){
      document.write(i); 
   }
       document.write("<br>")
}