"use strict";
/* eslint-disable prefer-const */
let multiply;
let capitalize;
multiply = function (val1, val2) {
    return val1 * val2;
};
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
// Hay un error de Eslint, voy a intentar sacar el error con F8 (Quick Fix).
console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`), ' Voy a hacer otra prueba: ', capitalize(`5 por 5 es: ${multiply(5, 5)}`));
// 1 Arreglar los errores
