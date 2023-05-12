"use strict";
const numberCollection = [];
const stringCollection = [];
function pushToCollection(item, collection) {
    collection.push(item);
    return collection;
}
// Anadir algunas cosas a las colecciones
// pushToCollection(false, stringCollection); Falso no puede ser añadido a una Colección de String
pushToCollection('Hi', stringCollection);
pushToCollection('Im human', stringCollection);
// pushToCollection([], stringCollection); Un Array vacío no puede ser añadido a una Colección de String
pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);
// Cambié los strings a numeros para que puedan ser añadidos en la numberCollection
const incrementedByTwo = numberCollection.map((num) => num + 2);
console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);
console.log('Y la stringCollection queda: ' + stringCollection);
// 1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear error es en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección determinada. Fije estos valores a los tipos correctos)
// 2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operaren artículos y colecciones de cualquier tipo mientras se continúa aplicando que coincidan
