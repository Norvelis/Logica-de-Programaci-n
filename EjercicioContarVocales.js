/* Escribe una función llamada contarVocales que reciba un arrays de strings, Usando el bucle For of la
función debe iterar sobre las palabras y devolver un objeto donde la clave sea la palabra y el valor sea la
cantidad de vocales que contiene
*/
// Función auxiliar para contar vocales de una palabra
function contarVocalesEnPalabra(palabra) {
    var vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    var contador = 0;
    for (var _i = 0, palabra_1 = palabra; _i < palabra_1.length; _i++) {
        var letra = palabra_1[_i];
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
function contarVocales(palabras) {
    var resultado = {};
    for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
        var palabra = palabras_1[_i];
        var cantidadVocales = contarVocalesEnPalabra(palabra);
        resultado[palabra] = cantidadVocales;
    }
    return resultado;
}
var palabras = ["Hola mundo, el día esta lindo. Hay sol, hoy es domingo y no estoy en la playa.", "Quiero comer algo rico"];
console.log("Arrays: ", palabras);
console.log("Resultado: ", contarVocales(palabras));
