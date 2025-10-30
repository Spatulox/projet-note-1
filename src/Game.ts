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
    
    private countNumberIdenticalDice(numberOfIdentical: number): boolean{
        const counts: { [key: number]: number } = {};
        for (const die of this.dices) {
            counts[die] = (counts[die] || 0) + 1;
            if (counts[die] === numberOfIdentical) {
                return true;
            }
        }
        return false;
    }

    private isBrelan(): Figure | null{
        return this.countNumberIdenticalDice(3) ? Figure.Brelan : null;
    }

    private isCarré(): Figure | null{
        return this.countNumberIdenticalDice(4) ? Figure.Carré : null;
    }

    private isFull(): Figure | null{
        const counts: { [key: number]: number } = {};
        for (const die of this.dices) {
            counts[die] = (counts[die] || 0) + 1;
        }

        const values = Object.values(counts);
        if (values.includes(3) && values.includes(2)) {
            return Figure.Full;
        }
        return null;
    }

    private isGrandeSuite(): Figure | null{
        
        let last_dice = this.dices[0]
        for (let i = 1; i < this.dices.length; i++) {
            if(last_dice + 1 != this.dices[i]){
                return null
            }
            last_dice = this.dices[i]!
        }

        return Figure["Grande Suite"]
    }


    private isYAMS(): Figure | null{

        let last_dice =  this.dices[0]
        for (const die of this.dices) {
            if(die != last_dice){
                return null
            }
            last_dice = die
        }

        return Figure.YAMS
    }


    state(): Figure{
        return this.isYAMS() || this.isGrandeSuite() || this.isCarré() || this.isFull() || this.isBrelan() || Figure.Chance// this.isYAMS() || this.isGrandeSuite() || this.isCarré() || this.isFull() || this.isBrelan() || this.isChance()
    }

}