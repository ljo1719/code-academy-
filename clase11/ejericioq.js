/* Escribir una función suma que reciba 2 arrays como argumentos y realice lo siguiente
Si los array son de diferentes dimensiones (es decir tienen distintas cantidades de elementos)
devolver un mensaje de error indicando que ambos arrays deben ser de igual magnitud
Debe sumar de cada array el elemento en la misma posición y devolver un tercer array con los elementos sumados
Ej. 1:
Elementos de entrada
array_1: [1, 2, 3]
array_2: [3, 5, 6, 0]
resultado esperado
Error: Los arrays deben ser de igual magnitud
------------------------------------------------------------------------
Ej. 2:
Elementos de entrada
array_1: [1, 2, 3]
array_2: [3, 5, 6]
resultado esperado
[4, 7, 9] (editado)  */

function Array2 () {

    var numerosA2 = [];
    var z = prompt("Ingresa valor de Array 2");
               
        while (z != null) {
            numerosA2.push(z);
            var z = prompt ("Ingresa valor de Array 2");
        }
        console.log(numerosA2);   
        return numerosA2;
}
          

function Array1 () {
    var numerosA1 = [];
    var x = prompt("Ingresa valor de Array 1");

    while ( x != null ) {
        numerosA1.push(x);
        var x = prompt("Ingresa valor de Array 1");  
    }
    console.log(numerosA1); 
    return numerosA1;

}
    

function SumaDeArrays ( numerosA1, numerosA2){
    var sum1 = [];

    if (numerosA1.length === numerosA2.length){

        for (var i = 0; i < numerosA1.length; i++) {         
            sum1.push((+ numerosA2[i]) + (+ numerosA1[i]));
        }
        console.log(sum1); 
    } else { alert("Los arrays deben ser de igual magnitud")}
      
}

SumaDeArrays(Array1(), Array2());

