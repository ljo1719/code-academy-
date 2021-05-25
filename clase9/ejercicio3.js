/*  Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
ejemplo: hola-mundo-cruel
Nota: usar al pulsar cancelar el resultado de la variable va a ser null.
  */

let texto = "";
let word;

while ((word = prompt("ingrese una palabra")) != null){
    if (texto ==="") {
        texto = word;
} else {
    texto = texto + "-" + word;
}
}
document.write(texto)