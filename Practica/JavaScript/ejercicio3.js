// Ejercicio 3 •
// Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
// Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {

let alturaActual = 0, diasQueTarda = 0;
while (alturaActual != alturaDeseada) {
    diasQueTarda = diasQueTarda + 1;
    alturaActual = alturaActual + velocidadCrecimiento;
    if(alturaActual < alturaDeseada){
        alturaActual = alturaActual - velocidadDecrecimiento;
    }
    
}

return diasQueTarda;

}

calcularDiasCrecimiento(100,50,500);