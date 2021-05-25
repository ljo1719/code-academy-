/* Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

*/
let nota = prompt ("Ingrese su nota")

while (Number.isNaN(+nota)) {
    nota = prompt ("Ingrese su nota")
}

if (nota <=10 && nota >=0) {
    if (nota >= 0 && nota <= 2 ) alert ("Muy deficiente")
    else if (nota >= 3 && nota <= 4) alert ("Insuficiente")
    else if (nota >= 5 && nota <= 6) alert ("Suficiente")
    else if(nota ==7) alert("Bien")
    else if(nota >= 8 && nota <= 9) alert ("Notable")
    else if(nota == 10) alert ("Sobresaliente")
} else {
    alert ("Ingrese un número valido")
}