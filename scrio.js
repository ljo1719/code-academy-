
var nombre = prompt("Nombre")
var edad = prompt("Ingrese su edad")


if (edad >= 18){
    texto = nombre + " Ud. Puede conducir \n"  
}
if (edad < 18){
    texto = nombre + " Ud. No Puede conducir \n"
}

document.write(texto) 

