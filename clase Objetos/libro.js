/* Libros
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro {
    constructor (isbn, Titulo, Autor, Paginas){
    this.isbn = isbn;
    this.Titulo = Titulo;
    this.Autor =  Autor;
    this.Paginas = Paginas;
    }
    set setIsbn (isbn) {
        this.isbn = isbn;
    }
    get getIsbn (){
        return this.isbn;
    }
    set setTitulo (Titulo){
        this.Titulo = this.Titulo;
    }
    get getTitulo (){
        return this.Titulo;
    }
    set setAutor (Autor){
        this.Autor = Autor;
    }
    get getAutor (){
        return this.Autor;
    }
    set setPaginas (Paginas){
        this.Paginas = Paginas;
    }
    get getPaginas (){
        return this.Paginas;
    }

    mostrarLibro(){
        // console.log ( "El libro "+ this.getTitulo + " con ISBN "+ this.getIsbn + " creado por el Autor "+ this.getAutor + " tiene " + this.getPaginas + " páginas")
        console.log (`El libro ${this.getTitulo} con ISBN ${this.isbn} creado por el Autor ${this.getAutor} tiene ${this.getPaginas} páginas`)
    } 

} 

function nroDePaginas (a,b) {
    if ((+a.getPaginas) > (+b.getPaginas)){ 
        console.log ( "El libro con mas paginas es " + a.getTitulo) 
    } else {
        console.log ( "El libro con mas paginas es " + b.getTitulo)
        }
    }
    
const libro1 = new Libro ("0192345", "Rayuela", "Julio Cortazar", "1200");
const libro2 = new Libro ("0287345", "Percy Jackson", "Rick Giordan", "800");

libro1.mostrarLibro(libro1);

nroDePaginas (libro1, libro2);


