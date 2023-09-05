/**
 * @jest-environment jsdom
 */
import { describe, expect, test } from "@jest/globals";
import { shuffleCardsArray } from "./shuffled-function";
// import { minutes, useTimer } from "./timer";

describe("shuffleCardsArray", () => {
    test("the original array is not equal to the shuffled one", () => {
        const array = [
            { rank: "A", suit: "spades" },
            { rank: "K", suit: "hearts" },
            { rank: "Q", suit: "clubs" },
        ];
        const originalArray = [...array];
        const shuffledArray = shuffleCardsArray(array);
        expect(shuffledArray).not.toBe(originalArray);
    });
});
