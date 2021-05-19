var nombre = prompt("Ingrese su nombre aquí")
var peso = prompt("Ingrese su peso en kilos")
var altura = prompt("Ingrese su altura en metros")
var imc = peso / (altura * altura)

if (imc <= 19 ){
    texto = nombre + " Estas Muy flaquito/a" + "Tu IMC ES  " + imc 
}
if (imc > 19 && imc < 25){
    texto = nombre + " Estas Bien" + "Tu IMC ES  " + imc
}

if (imc >= 25){
    texto = nombre + " Estas fuertecito/a (no gordito/a)"  + "Tu IMC ES  " + imc
}
document.write(texto) 