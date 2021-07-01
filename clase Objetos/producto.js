/* 4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const datos = [];

datos[0] = new Producto ("0213","teclado","20usd")
datos[1] = new Producto ("1234","Celular","30usd")
datos [2] = new Producto ("1245","Nootbook","200usd")

function imprime_datos (arreglo1) {
    console.log(arreglo1);  
}
imprime_datos(datos);

