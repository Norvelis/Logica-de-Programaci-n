/* Escribe una función llamada contarVocales que reciba un arrays de strings, Usando el bucle For of la
función debe iterar sobre las palabras y devolver un objeto donde la clave sea la palabra y el valor sea la
cantidad de vocales que contiene
*/

// Función auxiliar para contar vocales de una palabra
function contarVocalesEnPalabra(palabra: string): number{
    const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    let contador = 0;

    for (const letra of palabra){
        if (vocales.includes(letra)){
            contador++;
        }           
    }
    return contador
}

//Función Contar Vocales
function contarVocales(palabras:string []): any{
    const resultado: any = {};

    for (const palabra of palabras){
         const cantidadVocales = contarVocalesEnPalabra(palabra);
         resultado[palabra]=cantidadVocales;

    }
   return resultado;

}

const palabras = ["Hola mundo, el día esta lindo. Hay sol, hoy es domingo y no estoy en la playa.", "Quiero comer algo rico"]
console.log("Arrays: ", palabras);
console.log("Resultado: ", contarVocales(palabras));