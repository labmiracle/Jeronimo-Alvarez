// Ejercicio 7 • 
// En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. 
// Esto se llama conteo de cartas.
// Tener más cartas altas en el mazo favorece al jugador. 
// A cada carta se le asigna un valor de acuerdo con la tabla siguiente. 
// Cuando la cuenta es positiva, el jugador debe apostar alto.
// Cuando la cuenta es cero o negativa, el jugador debe apostar poco.
// Escribe una función de conteo de cartas. 
// Tendrá un parámetro card, que puede ser un número o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo con el valor de card. 
// La función devolverá una cadena con el recuento actual y la cadena Bet si el recuento es positivo, o Hold si el recuento es cero o negativo. 
// El recuento actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio

// Count Cards
// +1 2, 3, 4, 5, 6
// 0 7, 8, 9
// -1 10, J, Q, K, A
// Ejemplo:
// -3 Hold
// 5 Bet


let count = 0;
function cc(card) {
    for (let i = 0; i < card.length; i++) {
        if(card[i] > 1 && card[i] <= 6){
            count = count + 1;
        } else if(card[i] >= 7 && card[i] < 10){
            count = count + 0;
        } else if(card[i] == "J" || card[i] == "Q" || card[i] == "K" || card[i] == "A" || card[i] == "10"){
            count = count - 1;
        }
    }
    if(count>0){
        return count + " Bet"
    } else {
        return count + " Hold"
    }
}
