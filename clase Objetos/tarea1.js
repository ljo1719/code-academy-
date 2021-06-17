/* Crear un objecto `calculadora` que tenga las siguientes funciones
sumar
restar
multiplicar
dividir

En todos los casos, se reciben 2 parámetros y se devuelve el resultado de la operación.

Además, debe almacenarse en un array un objeto que tenga la siguientes características:

{
  operacion: [suma, resta, multiplicacion, division],
  operandos: [a, b]
  resultado: x
}

EJEMPLOS:

input: calculadora.sumar(2, 4)
output: 6

y en calculadora.operaciones, debe almacenarse:
calculadora.operaciones = [
  {
    operacion: "suma"
    operandos: [2, 4]
    resultado: 6
  }
]
al final del ejercicio, operaciones debe tener un historial de todas las operaciones que se realizaron */

const calculadora = { 
    sumar: function (a,b){ const suma = (a+b); 
        this.operaciones.push(this.guardar("suma",a,b,suma));
        return suma },
    restar: function (a,b){ const resta = (a-b);
        this.operaciones.push(this.guardar("resta",a,b,resta))
        return (resta)},
    multiplicar: function (a,b){ producto = (a*b); 
        this.operaciones.push(this.guardar("producto",a,b,producto));
        return (producto)}, 
    dividir: function (a,b){ divide=(a/b); 
        this.operaciones.push(this.guardar("division",a,b,divide))
        return(divide)},
    operaciones: [],
    guardar: function ( tipo,parametro1, parametro2, total ) { 
        return (   {operacion: tipo,
                    operandos: [parametro1,parametro2],
                    resultado:total}) }
}

