// Ejercicio 4 •

// Crea una función que reciba una frase como cadena y devuelva la palabra más larga: 
function palabraMasLarga(str) {
    let palabrasFrase = str.split(" ");
    var masLarga = palabrasFrase[0];
    for (let i = 1; i < palabrasFrase.length; i++) {
        if(masLarga.length < palabrasFrase[i].length){
            masLarga = palabrasFrase[i];
        }
    }
    return masLarga;
}

// • Crea una función que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayúscula 
function primeraMayuscula(str) {
    var palabrasConMayus = str.split(' ');
    for(let i = 0; i < palabrasConMayus.length; i++) {
        palabrasConMayus[i] = palabrasConMayus[i].charAt(0).toUpperCase() + palabrasConMayus[i].slice(1);
    }
    return palabrasConMayus.join(' ');
}

// Ambas funciones testeadas con: primeraMayuscula('En un lugar de la Mancha')
