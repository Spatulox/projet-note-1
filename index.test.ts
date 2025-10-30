import { describe, expect, it } from "vitest";
import { Figure, Game, Rolls } from "./src/Game";


describe("Roman Number MApper", () => {
    it.each([
        [[1, 1, 1, 4, 5] as Rolls, Figure.Brelan],          // Brelan
        [[1, 1, 1, 1, 5] as Rolls, Figure.Carré],           // Carré
        [[5, 5, 5, 5, 5] as Rolls, Figure.YAMS],            // YAMS
    ])("should map %i to %s", (num, expected) => {
        expect(new Game(num).state()).toBe(expected);
    });
})