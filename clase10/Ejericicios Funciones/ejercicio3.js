/*  Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla. 
triangulo();*/

function triangulo (){
    perimetro = (lado1 + lado2)*2;
    document.write ("El Perimetro del triangulo es: " + perimetro);
};

let perimetro;
let lado1 = + (prompt("Ingrese lado 1"));
let lado2 =+ (prompt("Ingrese lado 2"));

triangulo ();
