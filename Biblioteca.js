// Crear una biblioteca - objeto { autor: string, nombre: string, precio: number}
// 1- buscar un libro - Mostrar 1 libro
// 2- agregar libro - agregar 1 libro
// 3- borrar libro - 1 libro
// 4- listar todos los libros - Ver todos los libros
var biblioteca = [
    { id: 101, nombre: "cien anios de soledad", autor: "Gabriel", precio: 100 },
    { id: 102, nombre: "el ojo delator", autor: "Jose", precio: 200 },
    { id: 103, nombre: "HP", autor: "JK", precio: 2000 }
];
// [ Libro1,Gabo,3,4,hola]
// tupla -> array que sus valores si estan relacionado pero no es un objeto [cien anios de soledad, gabo, 100, atlantida]
//[ {libro1},{Libro2}.{Libro3}]
function buscarLibro(id) {
    var libro = biblioteca.find(function (l) { return l.id === id; });
    if (libro) {
        console.log("El libro encontrado es: ".concat(libro.nombre, " y el precio es ").concat(libro.precio));
    }
    else {
        console.log("El libro no se encuentra");
    }
    return libro;
}
//buscarLibro(105) 
// push
function agregarUnLibro(id, nombre, autor, precio) {
    var libroNuevo = { id: id, nombre: nombre, autor: autor, precio: precio };
    biblioteca.push(libroNuevo);
}
//agregarUnLibro(103,"Harry y las reliquias de la muerte", "JK", 2000)
//buscarLibro(103) 
function borrarLibro(id) {
    var libroEliminado = { id: id };
    biblioteca.splice(2, 1);
}
//borrarLibro(103)
//console.log(biblioteca)
function listarLibros() {
    for (var _i = 0, biblioteca_1 = biblioteca; _i < biblioteca_1.length; _i++) {
        var libro = biblioteca_1[_i];
        console.log("ID: ".concat(libro.id, " | Nombre: ").concat(libro.nombre, " | Autor: ").concat(libro.autor, " | Precio: $").concat(libro.precio));
    }
}
listarLibros();
