/* Escribe una función encontrarNumeros Primos que reciba un array de números enteros. Usando un bucle For, la función debe
   identificar y devolver un nuevo array que contenga sólo los números primos encontrados en el array original
*/
function esPrimo(numero) {
    if (numero <= 1)
        return false;
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0)
            return false;
    }
    return true;
}
//console.log(esPrimo(5))
function encontrarNumerosPrimos(numeros) {
    if (numeros === void 0) { numeros = []; }
    var numerosPrimos = [];
    for (var i = 0; i < numeros.length; i++) {
        var num = numeros[i];
        var esPrimo_1 = true;
        if (num <= 1)
            esPrimo_1 = false;
        else {
            for (var j = 2; j < num; j++) {
                if (num % j == 0)
                    esPrimo_1 = false;
                break;
            }
        }
        if (esPrimo_1)
            numerosPrimos.push(num);
    }
    return numerosPrimos;
}
console.log(encontrarNumerosPrimos([2, 5, 8, 7, 1, 0, 100, 150, 300, 1000]));
