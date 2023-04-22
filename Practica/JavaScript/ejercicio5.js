// Ejercicio 5 • 
// Crea una función que reciba una cadena y la devuelva en camelCase
function camelize(str) {
    var palabras = str.split(" ");
    palabras[0] = palabras[0].charAt(0).toLowerCase() + palabras[0].slice(1);
    for (let i = 1; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join("")
}

console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');