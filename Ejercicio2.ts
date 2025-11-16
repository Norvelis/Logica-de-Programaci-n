// Crear una función que reciba un arreglo de números y devuelva la suma y el mayor número.
// 1- para saber cual es mayor comparo uno con otro
// 2- para sumar los valores de los indices (50 numeros)
// 3- recorrer array con for


// 1. Array tipado como number[]
const array: number[] = [10, 25, 56, 128, 33, 12];

// 2. Inicialización correcta de variables:
//- suma debe ser 0 para empezar a acumular.
// - mayorNumero debe ser el primer elemento del array para la comparación.

let suma: number = 0;
let mayorNumero: number = array[0];

// 3. Uso de 'let' para el índice 'i' y corrección de la condición del bucle:
// El bucle ahora inicia en i = 0 y continúa MIENTRAS i sea MENOR que array.length.

for (let i = 0; i < array.length; i++) {
    const num: number = array[i]; // Uso de 'const' para el valor actual y tipado

    // Acumulación y comparación
    suma += num;

    if (num > mayorNumero) {
        mayorNumero = num;
    }

    // Nota: El console.log dentro del bucle muestra el progreso, no el resultado final.
    // console.log(`[i=${i}] Mayor hasta ahora: ${mayorNumero}, Suma hasta ahora: ${suma}`);
}

// 4. Mostrar el resultado final (fuera del bucle)
console.log("------------------------");
console.log("El número mayor es: " + mayorNumero); // 128
console.log("La suma total es: " + suma); // 264