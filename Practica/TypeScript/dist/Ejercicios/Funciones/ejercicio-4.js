"use strict";
function greet(greeting) {
    return greeting.toUpperCase();
}
const defaultGreeting = greet("Hola! Como te va?");
const portugueseGreeting = greet('Oi como vai!');
const frenchGreeting = greet('Salut! Comment ça va?'); // Pruebo con otro idioma para ver su funcionamiento jeje
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting, frenchGreeting);
// 1 Añadir tipos explícitos a los parámetros y tipo de retorno 
// 2 Añadir un saludo predeterminado: ”hola”
