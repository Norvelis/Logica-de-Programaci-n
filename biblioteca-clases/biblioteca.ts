class Libro {

  constructor(
    public id: number,
    public nombre: string,
    public autor: string,
    public precio: number 
  ) {}
}

class Biblioteca{
  private nombre: string
  private libros: Libro[]

  constructor(nombre: string){
    this.nombre = nombre
    this.libros = []
  }

 agregarLibro(id: number, nombre:string, autor:string, precio:number):void {
  
  const nuevoLibro: Libro = {
      id: id,
      nombre: nombre,
      autor: autor,
      precio: precio
    }
    this.libros.push(nuevoLibro)

  console.log(`El libro que se agrego fue: ${nuevoLibro.nombre} cuesta ${nuevoLibro.precio}`)
 }

 //hacer función de mostrar libro
 buscarLibro(id: number) {

      const libroBuscado = this.libros.find(libro=>libro.id === id )
    if (libroBuscado){
            console.log(`El libro encontrado es: ${libroBuscado}`)
    }else{
        console.log("El libro no se encuentra")
    }
    
    return libroBuscado

 }

}

const ateneo = new Biblioteca("Ateneo Libros")
//ateneo.agregarLibro(100, "La alfombra magica", "Sushi Yamamoto", 50000, )

ateneo.buscarLibro(100)

//hacer otro metodo: buscarLibro, 
//Mejorar metodo agregarLibro.


