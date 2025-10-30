export enum Figure {
    "Brelan" = 1, // The first enum is 0 but JS use is as a null value, so need to shift it by one
    "Carré",
    "Full",
    "Grande Suite",
    "YAMS",
    "Chance"
}

export type Rolls = [number, number, number, number, number]

export class Game{

    private dices: Rolls

    constructor(dice: Rolls){
        this.dices = dice
    }

    private isBrelan(): Figure | null{

        const counts: { [key: number]: number } = {};
        for (const die of this.dices) {
            counts[die] = (counts[die] || 0) + 1;
            if (counts[die] === 3) {
                return Figure.Brelan;
            }
        }
        return null;
    }


    state(): Figure{
        return this.isBrelan() || Figure.Chance// this.isYAMS() || this.isGrandeSuite() || this.isCarré() || this.isFull() || this.isBrelan() || this.isChance()
    }

}