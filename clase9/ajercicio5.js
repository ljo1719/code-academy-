/* Realizar una página con un script que calcule 
el valor de la letra de un número de DNI 
(Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/

//DECLARAMOS LAS VARIABLES QUE VAMOS A USAR

let dni = prompt ("Ingrese su DNI");
const letras = [ "T", "R", "W"," A", "G", "M", "Y"," F", "P", "D", "X", "B"," N", "J", "Z", "S"," Q", "V", "H", "L", "C", "K", "E" ];

while ( dni != null){

if (dni >=0 && dni <= 99999999) {
         document.write ("la letra es "+ letras[dni%23]);
         document.write("<br>")

} else if ( Number.isNaN(dni)) {
     alert ("valor nulo");
} else {
     alert ("Ingrese un nro de DNI valido");
}
      dni = prompt ("ingrese otro dni")
      
}


