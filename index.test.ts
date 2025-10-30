import { describe, expect, it } from "vitest";
import { Figure, Game, Rolls } from "./src/Game";
import { Games } from "./src";


describe("Single Figure Test", () => {
    it.each([
        [[1, 1, 1, 4, 5] as Rolls, Figure.Brelan],          // Brelan
        [[1, 1, 1, 1, 5] as Rolls, Figure.Carré],           // Carré
        [[1, 1, 1, 4, 4] as Rolls, Figure.Full],            // Full
        [[1, 2, 3, 4, 5] as Rolls, Figure["Grande Suite"]], // Grande Suite
        [[5, 5, 5, 5, 5] as Rolls, Figure.YAMS],            // YAMS
        [[5, 4, 2, 3, 1] as Rolls, Figure.Chance],          // Chance
    ])("should send %i to %s", (num, expected) => {
        expect(Figure[new Game(num).state()]).toBe(Figure[expected]);
    });
})


describe("Muiltiple Figure Test", () => {
    it.each([
        [[[1, 1, 1, 4, 5], [5, 5, 5, 5, 5]] as Rolls[], 50], // Brelan / YAMS => YAMS
    ])("should send %i to %s", (num, expected) => {
        expect(Games(num)).toBe(expected);
    });
})