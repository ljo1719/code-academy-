/*  Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario 
(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let a = prompt("valor del 1 al 50"), z;

 if ( a >= 0 && a <= 50) {
    for ( i = a; i >= 0; i-- ){

        for ( z = 0; z < i; z++){
           document.write(i); 
        }
            document.write("<br>")
     }
} else {
    alert("ingrese valor correcto")
}
