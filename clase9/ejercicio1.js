/* Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/


const edad = prompt("Ingrese su edad")

if (Number.isNaN(+edad)){
    alert ("Pone bien la edad")
}
else if (edad >= 18){

    alert ("Ud puede manejar")
}


