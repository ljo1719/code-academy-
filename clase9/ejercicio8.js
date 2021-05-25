/*  Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let a = prompt ("Ingrese valor entre 1 y 50") , z;

if (a >= 0 && a <= 50) {
    for ( i = 0; i <= a; i++ ){

        for ( z = 1; z <= i; z++){
            document.write(z); 
        }
            document.write("<br>")
        }
} else [alert("ingrese valor correcto")]   