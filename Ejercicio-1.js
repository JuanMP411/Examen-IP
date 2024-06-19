// Crea una función que reciba un array de objetos, donde cada objeto 
// representa a un estudiante con las propiedades nombre y nota. La 
// función debe devolver un nuevo array con los nombres de los 
// estudiantes que tienen una nota mayor o igual a 7. 

function estudiantesAprobados(estudiantes) {
    let aprobados = [];

    
    for (let i = 0; i < estudiantes.length; i++) {
        
        let nota = estudiantes[i].nota;
        
        
        if (nota >= 7) {
            
            aprobados.push(estudiantes[i].nombre);
        }
    }

    
    return aprobados;
}

let estudiantes = [
    { nombre: 'Fernanda', nota: 8 },
    { nombre: 'María', nota: 6 },
    { nombre: 'Ciro', nota: 7 },
    { nombre: 'Rodrigo', nota: 9 },
    { nombre: 'Sergio', nota: 5 }
];

console.log(estudiantesAprobados(estudiantes));