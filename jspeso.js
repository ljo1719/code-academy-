

var nota = prompt("ingrese su calificacion de 0 al 10")

if(nota > 0 && nota <= 3){
    texto = nota + " es una nota muy deficiente"
}
if(nota > 3 && nota <= 5){
    texto = nota + " es una nota insuficiente"
}
if(nota > 5 && nota <= 6){
    texto = nota + " es una nota suficiente"
}
if(nota > 6 && nota <= 7){
    texto = nota + " su nota esta bien"
}
if(nota > 7 && nota <= 9){
    texto = nota + " es una nota notable"
}
if(nota >= 10){
    texto = nota + " es una nota sobresalinete"
}

document.write(texto)

