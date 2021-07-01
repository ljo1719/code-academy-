/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, nacimiento){ 
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni; 
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
    }
    mostrarGeneracion (nacimiento) {

        if ( nacimiento > 1930 &&  nacimiento < 1948 ) {
            console.log ("Silent Generation");
            console.log("rasgo caracteristico = Austeridad");
    
        }  else if ( nacimiento > 1949 &&  nacimiento < 1968 ){
            console.log ("Baby Boom");
            console.log("rasgo caracteristico = Ambición");
    
        } else if ( nacimiento > 1969 &&  nacimiento < 1980 ){
            console.log ("Generación X");
            console.log("rasgo caracteristico = Obseción con el Exito");
    
        } else if ( nacimiento > 1981 &&  nacimiento < 1993 ){
            console.log ("Generación Y");
            console.log("rasgo caracteristico = Frustración");
        } else if ( nacimiento > 1994 &&  nacimiento < 2010 ){
            console.log ("Generación Z");
            console.log("rasgo caracteristico = Irreverencia");
        }
    
    }
    mostrarDatos (parametro) {
        console.log (parametro)
     }

     
    generaDNI (){
        this.dni = (Math.floor(10000000 + Math.random() * 90000000));
        }

}

const persona1 = new Persona ("victoria","32","","M","53","1.6","1988")

persona1.mostrarGeneracion(persona1.nacimiento);
persona1.mostrarDatos(persona1);
persona1.generaDNI();