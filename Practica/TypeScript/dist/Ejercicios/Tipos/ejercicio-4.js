"use strict";
class Bird {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de aves.');
    }
    fly(height) {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}
class Fish {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth) {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal() {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
        new Fish('Seadra'),
        new Bird('Pidgeotto'),
        new Bird('Staraptor'),
        new Fish('Magikarp'),
        new Fish('Gyarados')
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}
function interrogateAnimal(animal = getRandomAnimal()) {
    if (animal instanceof Bird) {
        animal.fly(10); // se llama solo si es un pajaro
    }
    else if (animal instanceof Fish) {
        animal.swim(10); // se llama solo si es un pez
    }
    return animal.species;
}
console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
// Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Defina dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos
// Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘
// Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros volar
// Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible
