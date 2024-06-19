// Crea una clase que represente un libro en una biblioteca. Cada libro 
// debe tener las propiedades título, autor y año de 
// publicacion. La clase debe tener un método que imprima la 
// información del libro en la consola. Además, crea otra clase que 
// gestione una colección de libros. La clase biblioteca debe tener un 
// método para añadir libros a la colección y otro método para mostrar 
// todos los libros en la biblioteca. 

class Libro {
    constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    informacion() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de publicación: ${this.anioPublicacion}`);
    }
}

class Biblioteca {
    constructor() {
        this.catalogo = [];
    }

    agregarLibro(libro) {
        this.catalogo.push(libro);
    }

    mostrarLibros() {
        console.log("Libros en la biblioteca:");
        this.catalogo.forEach(libro => {
            libro.informacion();
        });
    }
}

let libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943);
let libro2 = new Libro("Rayuela", "Julio Cortázar", 1963);
let libro3 = new Libro("Orgullo y prejuicio", "Jane Austen", 1813);


let biblioteca = new Biblioteca();


biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);


biblioteca.mostrarLibros();