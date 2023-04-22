// Ejercicio 11 • 
// Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos y devuelva un arreglo de solo los argumentos únicos

function onlyUniques(...args){
    let unicos;
    for (let i = 0; i < args.length; i++) {
        if(args.filter((arg => arg == args[i])).length == 1){
            unicos.push(args[i]);
        }
    }
    return unicos
}
