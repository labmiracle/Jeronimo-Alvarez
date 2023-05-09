"use strict";
function padLeft(value, padding) {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    if (typeof padding === "number") {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    else if (typeof padding === "string") {
        return padding + value;
    }
    return "Los valores ingresados no son válidos, vuelve a intentarlo porfavor :)";
}
console.log('[Ejercicio 4.2]', `
    ${padLeft('May the Force be with you.', 1)},
    ${padLeft('', 7)},
    ${padLeft('The Force will be with you. Always.', '')},
    ${padLeft('', 22)},
    ${padLeft('Goodbye, padawan', 5)},
    `);
