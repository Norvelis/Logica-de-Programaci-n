// Crear una biblioteca - objeto { autor: string, nombre: string, precio: number}

// 1- buscar un libro - Mostrar 1 libro
// 2- agregar libro - agregar 1 libro
// 3- borrar libro - 1 libro
// 4- listar todos los libros - Ver todos los libros

const biblioteca = [
  { id: 101, nombre:"cien anios de soledad" , autor: "Gabriel", precio: 100 },
  { id: 102, nombre:"el ojo delator" , autor: "Jose", precio: 200 },
  { id: 103, nombre:"HP" , autor: "JK", precio: 2000 }
]

  // [ Libro1,Gabo,3,4,hola]
  // tupla -> array que sus valores si estan relacionado pero no es un objeto [cien anios de soledad, gabo, 100, atlantida]
  //[ {libro1},{Libro2}.{Libro3}]


  function buscarLibro(id: number){
    const libro = biblioteca.find(l => l.id === id)
    if (libro){
            console.log(`El libro encontrado es: ${libro.nombre} y el precio es ${libro.precio}`)
    }else{
        console.log("El libro no se encuentra")
    }
    
    return libro
    
  }

  //buscarLibro(105) 

    // push
  function agregarUnLibro(id: number,nombre:string, autor:string, precio:number){
    const libroNuevo = {id, nombre, autor, precio}
    biblioteca.push(libroNuevo)

  }

  //agregarUnLibro(103,"Harry y las reliquias de la muerte", "JK", 2000)
  //buscarLibro(103) 

  function borrarLibro(id: number){
    const libroEliminado = {id}
    biblioteca.splice(2,1);
    
  }

  //borrarLibro(103)
  //console.log(biblioteca)

  function listarLibros(){
   
    for (const libro of biblioteca){
        console.log(`ID: ${libro.id} | Nombre: ${libro.nombre} | Autor: ${libro.autor} | Precio: $${libro.precio}`);
      }
    }

    listarLibros();
  



