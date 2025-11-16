/* Escribe una función encontrarNumeros Primos que reciba un array de números enteros. Usando un bucle For, la función debe
   identificar y devolver un nuevo array que contenga sólo los números primos encontrados en el array original
*/

function esPrimo(numero: number) {
    if (numero <= 1) return false
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) return false
    }
    return true
}
//console.log(esPrimo(5))


function encontrarNumerosPrimos(numeros: number[] = []) {
    const numerosPrimos: number[] = [];

    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i]
        let esPrimo = true
        if (num <= 1) esPrimo = false
        else {
            for (let j = 2; j < num; j++) {
                if (num % j == 0) esPrimo = false
                break
            }
        }
        if (esPrimo) numerosPrimos.push(num)
    }
    return numerosPrimos
}

console.log(encontrarNumerosPrimos([2,5,8,7,1,0,100,150,300,1000]))



