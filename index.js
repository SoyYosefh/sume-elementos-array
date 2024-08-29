// 5. Suma de elementos de un arreglo: Crea un arreglo 
// de números y calcula la suma de todos sus elementos.

const numeros = [5, 3, 8, 1, 2, 9, 4, 7, 6];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(`La suma de los números ${numeros} es: ${suma}`);