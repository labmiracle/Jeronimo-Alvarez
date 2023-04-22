// Ejercicio 8 • 
// Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma de todos los argumentos.

function sumArgumentos(...args){
    let suma = 0;
    args.forEach(num => {
        suma = suma + num;
    });
    return suma;
}