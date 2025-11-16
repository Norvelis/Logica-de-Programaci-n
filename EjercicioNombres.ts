/*Tienes un array de nombres de usuario. Algunos nombres están en minúsculas y otros mezclados. Escribe una función
normalizarNombres que reciba el array. La función debe iterar sobre los nombres y crear un nuevo array donde todos
los nombres están con mayúscula inicial.*/

function normalizarNombres(nombres: String [] = []){

    const nombresNormalizados: String [] = [];

nombres.forEach(nombre=>{
    const normalizar = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    nombresNormalizados.push(normalizar)
})

console.log(nombresNormalizados);
}
console.log(normalizarNombres(["alex", "SOFIA", "mArCos", "ISABEL", "anA", "carOlInA"]));
