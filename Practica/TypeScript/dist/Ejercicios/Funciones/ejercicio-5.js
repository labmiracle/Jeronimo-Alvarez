"use strict";
function layEggs(quantity = 3, color = "Blancos") {
    console.log(`[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}
layEggs();
layEggs(6, "Rojos"); // Pruebo con otros valores por más que en la función estén asignados.
// 1 Añadir anotación de tipo de parámetro
// 2 A pesar de que esta función no vuelve, agregue un tipo de retorno explícito
