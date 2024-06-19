// Encontrar los errores en el código que paso adjunto, 
// previamente tener en cuenta la consigna :  
// “La clase llamada mascota debe represente una mascota en 
// una tienda. Cada mascota debe tener las propiedades 
// nombre, tipo (por ejemplo, perro, gato, etc.) y edad. La clase 
// debe tener un método llamado mostrarInfo que imprima la 
// información de la mascota en la consola. Además, otra clase 
// llamada TiendaDeMascotas que gestione una colección de 
// mascotas. La clase TiendaDeMascotas debe tener un método 
// para añadir mascotas a la colección y otro método para 
// mostrar todas las mascotas en la tienda.” 

class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}, Edad: ${this.edad}`);
    }
}

class TiendaDeMascotas {
    constructor() {
        this.mascotas = [];
    }

    añadirMascota(mascota) {
        this.mascotas.push(mascota);
    }

    mostrarMascotas() {
        this.mascotas.forEach(mascota => mascota.mostrarInfo());
    }
}

const mascota1 = new Mascota('Max', 'Perro', 2);
const mascota2 = new Mascota('Luna', 'Gato', 1);
const mascota3 = new Mascota('Charlie', 'Hamster', 1);
const miTienda = new TiendaDeMascotas();

miTienda.añadirMascota(mascota1);
miTienda.añadirMascota(mascota2);
miTienda.añadirMascota(mascota3);
miTienda.mostrarMascotas();
