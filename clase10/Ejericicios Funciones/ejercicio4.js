/* Escriba un script que muestre la tabla de multiplicar de 
un número ingresado por pantalla, la creación de la tabla debe 
ser realizada con una función y mostrar solo los resultados del 1 al 10 
del número elegido por el usuario.
*/

const multiplo = ["0","1","2","3","4","5","6","7","8","9","10"];
let numero = prompt("ingrese un nro del 1 al 10");
function tabla (){
      
    for (let i = 0; i <= multiplo.length -1 ; i++) {
        resultado = numero * multiplo[i];
        document.write ( "<br>"+ numero + " x "+ i + " = " + resultado);
    };

};
document.write("Tabla de Multiplicar del nro: "+ numero + "<br>")
tabla ();