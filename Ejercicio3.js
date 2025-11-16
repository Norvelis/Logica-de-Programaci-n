// Crear un objeto producto y función que calcule total y evalúe si es caro o accesible
var products = [
    {
        id: 101,
        name: "Laptop Ultraligera X20",
        price: 125000.99,
        description: "Portátil de alto rendimiento con chasis de aluminio, ideal para profesionales.",
        category: "Electrónica",
        stock: 15
    },
    {
        id: 102,
        name: "Taza de Café Cerámica 'Zen'",
        price: 9000.50,
        description: "Taza artesanal de 350ml con acabado mate y esmalte reactivo.",
        category: "Hogar",
        stock: 200
    },
    {
        id: 103,
        name: "Zapatos Deportivos Runner Pro",
        price: 8500.00,
        description: "Calzado diseñado para running, con suela amortiguadora y tejido transpirable.",
        category: "Vestimenta",
        stock: 50
    }
];
/*
//función validar precio
for(let i=0; i<products.length; i++){
    const productoCostoso = products[i];
    if(productoCostoso.price <= 8500.00){
        console.log(`El producto económico es: ${productoCostoso.name} ` )
    }

}
*/
/*
products.forEach(producto =>{
    if(producto.price <= 8500.00){
        console.log(`El producto económico es: ${producto.name} ` )
    }
})
*/
/*
for(const product of products){
        if(product.price <= 8500.00){
        console.log(`El producto económico es: ${product.name} ` )
    }
}
*/
//función anonima
var productoBarato = products.filter(function (producto) {
    return producto.price <= 8500;
});
console.log(productoBarato);
/*function validarProducto (producto:number){
    //Variables de entrada
    //let producto:number = 0;
    let iva:number = 0.21;
    let productoFinal: number = 0;
    let referenciaPrecio: number = 1000;

    productoFinal= producto + (producto * iva);

    if (productoFinal >= referenciaPrecio){
        console.log("El producto es caro, cuesta: " + productoFinal)

    } else {
        console.log("El producto es accesible, cuesta:" + productoFinal)
    }

}

validarProducto(1500);
*/ 
