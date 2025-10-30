import { Figure, Game, Rolls } from "./Game";

const Points = {
    
}

export function Games(diceThrown: Rolls[]){
    let points = 0;
    for (let index = 0; index < diceThrown.length; index++) {
        const element = diceThrown[index];
        if(!element){
            return
        }

        switch (new Game(element).state()) {
            case Figure.Brelan:
                points = 28
                break
            case Figure.Carré:
                points = 35
                break
            case Figure.Full:
                points = 30
                break
            case Figure["Grande Suite"]:
                points = 40
                break
            case Figure.YAMS:
                points = 50
                break
            case Figure.Chance:

        
            default:
                break;
        }
        
    }
    return points;
}



Games([
    [1, 1, 1, 4, 5], // Brelan
    [1, 1, 1, 1, 5], // Carré
    [1, 1, 1, 4, 4], // Full
    [1, 2, 3, 4, 5], // Grande Suite
    [5, 5, 5, 5, 5], // YAMS
    [5, 4, 2, 3, 1], // Chance
])