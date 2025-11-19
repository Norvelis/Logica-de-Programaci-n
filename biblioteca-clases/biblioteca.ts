// interface
interface ILibro {
  id: number;
  nombre: string;
  autor: string;
  precio: number;
}
class Biblioteca {
  private nombre: string;
  private libros: ILibro[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.libros = [];
  }

  agregarLibro(nuevoLibro: ILibro): void {
    this.libros.push(nuevoLibro);
    console.log(
      `El libro que se agrego fue: ${nuevoLibro.nombre} cuesta ${nuevoLibro.precio}`
    );
  }

  //hacer función de mostrar libro

  mostrarLibros() {
    console.log(`Los libros en la biblioteca ${this.nombre} son:`);
    console.log(this.libros);
    return this.libros;
  }

  buscarLibro(id: number): ILibro | undefined {
    const libroBuscado = this.libros.find((libro) => libro.id === id);
    if (libroBuscado) {
      console.log(
        `El libro encontrado es: ${libroBuscado.nombre} por ${libroBuscado.autor}`
      );
    } else {
      console.log('El libro no se encuentra');
    }

    return libroBuscado;
  }

  // Elimiar Libro de tarea
}

const yenny = new Biblioteca('yenny Libros');

yenny.agregarLibro({
  id: 100,
  nombre: 'La alfombra magica',
  autor: 'Sushi Yamamoto',
  precio: 5000,
});

yenny.mostrarLibros();
yenny.buscarLibro(100);
