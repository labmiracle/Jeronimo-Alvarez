// En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio degolpes que se espera que haga un golfista para meter la bola en un hoyo y así completarel juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existeun apodo diferente.Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta deacuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba (más alto) a abajo (más bajo):

const names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];

function golfScore(par, strokes) {

    if(par>0 && strokes>0){
        switch(true){
            case strokes==1:
                return names[0];
            case strokes<=par-2:
                return names[1];
            case strokes==par-1:
                return names[2];
            case strokes==par:
                return names[3];              
            case strokes==par+1:
                return names[4];
            case strokes==par+2:
                return names[5];
            case strokes>=par+3:
                return names[6];
        }
    } 
    else {
        return "No ingresaste los parámetros correctos. Probá de nuevo!"
    }
}

