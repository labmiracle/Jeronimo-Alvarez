// Ejercicio 10 • 
// Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
// y devuelva un solo arreglo que combine ambos (usando el operador ...)

function combineTwoArrays(array1, array2){
    let fusion = [...array1, ...array2]
    return fusion
}