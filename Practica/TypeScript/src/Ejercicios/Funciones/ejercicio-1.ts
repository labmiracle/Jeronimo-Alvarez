function add(x : number, y : number) {
    return x + y;
}

function sumArray(numbers : number[]): number{
    return numbers.reduce(add, 0);
}

const someSum = sumArray([3, 6, 9]);
const SomeSum2 = add(15,35); // Pruebo para ver como funciona jeje

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`, 'and', `15 + 35 === ${SomeSum2}`);

// 1 Agregue tipos explícitos a los parámetros y el tipo de retorno
// 2 Solucione cualquier error resultante de tipos inválidos