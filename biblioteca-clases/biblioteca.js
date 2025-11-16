var Libro = /** @class */ (function () {
    function Libro(id, nombre, autor, precio) {
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }
    return Libro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }
    Biblioteca.prototype.agregarLibro = function (id, nombre, autor, precio) {
        var nuevoLibro = {
            id: id,
            nombre: nombre,
            autor: autor,
            precio: precio
        };
        this.libros.push(nuevoLibro);
        console.log("El libro que se agrego fue: ".concat(nuevoLibro.nombre, " cuesta ").concat(nuevoLibro.precio));
    };
    //hacer función de mostrar libro
    Biblioteca.prototype.mostrarLibros = function () {
        console.log("Los libros en la biblioteca ".concat(this.nombre, " son:"));
        console.log(this.libros);
        return this.libros;
    };
    Biblioteca.prototype.buscarLibro = function (id) {
        var libroBuscado = this.libros.find(function (libro) { return libro.id === id; });
        if (libroBuscado) {
            console.log("El libro encontrado es: ".concat(libroBuscado.nombre, " por ").concat(libroBuscado.autor));
        }
        else {
            console.log("El libro no se encuentra");
        }
        return libroBuscado;
    };
    return Biblioteca;
}());
var ateneo = new Biblioteca("Ateneo Libros");
ateneo.agregarLibro(100, "La alfombra magica", "Sushi Yamamoto", 50000);
ateneo.mostrarLibros();
ateneo.buscarLibro(100);
