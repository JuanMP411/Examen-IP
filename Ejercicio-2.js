// Crea una función que reciba un array de objetos, donde cada objeto 
// representa a un estudiante con las propiedades nombre y nota. La 
// función debe devolver el promedio de las notas de todos los 
// estudiantes. 

function promedioNotas(estudiantes) {

    if (estudiantes.length === 0) {
    }

    let sumaNotas = 0;


    for (let i = 0; i < estudiantes.length; i++) {
        sumaNotas += estudiantes[i].nota;
    }

 
    let promedio = sumaNotas / estudiantes.length;


    return promedio.toFixed(2);
}


let estudiantes = [
    { nombre: 'Juan', nota: 8 },
    { nombre: 'Emiliano', nota: 6 },
    { nombre: 'Julian', nota: 7 },
    { nombre: 'Ronaldo', nota: 9 },
    { nombre: 'Messi', nota: 5 }
];

console.log(promedioNotas(estudiantes));