"use strict";
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten(array) {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[]
            console.log(typeof element);
            flattened.push(...element);
        }
        else {
            element; // any
            console.log(typeof element);
            flattened.push(element);
        }
    }
    return flattened;
}
const flattenedNumbers = flatten(numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers);
// 1. Añadir anotaciones de tipo ("any" excluido).
// 2. Inspeccione el tipo de 'element' en diferentes ramas de codigo.
// 3. Bonificacion: convertir 'flatten' en una funcion genérica.
