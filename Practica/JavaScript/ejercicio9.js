// Ejercicio 9 • 
// Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos (incluidos números o cadenas) y devuelva la suma de solo los números

function addOnlyNums(...args){
    
    let total = 0;
    args.forEach(arg => {
        if(typeof arg === "number"){
            total = total + arg
        }
    });
    return total;

}

