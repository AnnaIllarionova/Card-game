/**
 * @jest-environment jsdom
 */
import { describe, expect, test } from "@jest/globals";
import { shuffleCardsArray } from "./shuffled-function";

describe("shuffledCardArray", () => {
    test("shuffe array", () => {
        const array = [
            { rank: "A", suit: "spades" },
            { rank: "K", suit: "hearts" },
            { rank: "Q", suit: "clubs" },
        ];
        expect(shuffleCardsArray(array)).not.toBe(array);
    });
});
