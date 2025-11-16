/* Tienes un array de objetos que representan productos. Escribe una función llamada calcularPrecioFinal que reciba el array. Usa el método forEach para
    iterar sobre los productos y crear un nuevo array de objetos. Cada nuevo objeto debe tener las propiedades nombre, precioBase y una nueva propiedad
    precioConIVA (calculado con un IVA del 21% sobre el precio base) */
function calcularPrecioFinal(productos) {
    //Declaramos las constantes
    var productosConIVA = [];
    var IVA = 0.21;
    //Iteramos
    productos.forEach(function (producto) {
        //Calculamos el precio con IVA
        var precioConIVA = producto.precioBase + (producto.precioBase * IVA);
        //Creamos el nuevo objeto ocn las tres propiedades
        var productoConIva = {
            nombre: producto.nombre,
            precioBase: producto.precioBase,
            precioConIVA: precioConIVA
        };
        //Agregamos e nuevo objeto al Array
        productosConIVA.push(productoConIva);
    });
    return productosConIVA;
}
var productos = [
    { nombre: "Laptop", precioBase: 1000 },
    { nombre: "Mouse", precioBase: 50 },
    { nombre: "Teclado", precioBase: 150 },
    { nombre: "Monitor", precioBase: 500 }
];
console.log("=== PRODUCTOS ORIGINALES ===");
console.log(productos);
console.log("\n=== PRODUCTOS CON IVA (21%) ===");
var productosFinales = calcularPrecioFinal(productos);
console.log(productosFinales);
