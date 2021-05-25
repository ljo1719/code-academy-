/*  Realiza un script que pida por teclado 
3 edades y 3 nombres e indique el nombre del mayor.*/
/* Opcion 1 
let nombre1 = prompt(" Ingrse Nombre 1");
let edad1 = prompt ("Ingrese edad 1");
let nombre2 = prompt(" Ingrse Nombre 2");
let edad2 = prompt ("Ingrese edad 2");
let nombre3 = prompt(" Ingrse Nombre 3");
let edad3 = prompt ("Ingrese edad 3");

let mayor = Math.max(edad1, edad2, edad3);

if (mayor == edad1) {document.write("El mayor es: " + nombre1);}
if (mayor == edad2) {Document.write(" El mayor es " + nombre2);}
if (mayor == edad3) {Document.write(" El mayor es " + nombre3);} */

let nombres = [prompt("Ingrese Nombre 1"),prompt("Ingrese Nombre 2"),prompt("Ingrese Nombre 3")];
let edades = [prompt("Ingrese edad 1"),prompt("Ingrese edad 2"),prompt("Ingrese edad 3")];
let max = Math.max(...edades);
let i;

for (i = 0; i < edades.length; i++) {
    
    if (max == edades [i] ) { document.write (" El mayor es " + nombres[i]);}  
}

