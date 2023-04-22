// Ejercicio 2 •
// Escribe una función recursiva sum(arr, n)que retorne la suma de los primeros n elementos del arreglo arr 


function sum(arr, n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total = total + arr[i];
    }
    return total;
}

sum([1,2,3,4,7,78,234,523,134,254],5)