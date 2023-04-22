// Ejercicio 12 • 
// Vamos a armar el juego de ”Adivinar el número”. El juego consiste de los siguiente: La
// computadora genera un número aleatorio entre 1 y 10. Luego nos pide que adivinemos el
// número. 
// Si el número que ingresamos es menor que el que genero la maquina nos muestra
// el mensaje ”El número es mayor”. Si el número que ingresamos es mayor nos muestra el
// mensaje ”El número es menor”. 
// Cuando hayamos acertado el valor nos informa del fin del juego.
// • Agregue al juego anterior niveles de dificultad.

alert(`Bienvenido a "Adivinar el Número!"`);
var numeroElegido = prompt('Ingresa un numero para comenzar a jugar');
const numeroRandom = Math.floor(Math.random() * 10 + 1); // Pongo el + 1 para que no incluya al 0 e incluya al 10!
let intentos = 0;
while(numeroElegido != numeroRandom){
    if(numeroElegido < numeroRandom){
        alert('El numero es mayor');
        intentos = intentos + 1;
        numeroElegido = prompt('Ingresa otro número');
    } else {
        alert('El numero es menor');
        intentos = intentos + 1;
        numeroElegido = prompt('Ingresa otro número');
    }
    
}

alert("Felicidades, ganaste el juego! Solo te costó: " + intentos + "intentos!")
 
// Faltar implementar sistema de dificultad, pensé en sumarle vidas ó cantidad de numeros para el rango