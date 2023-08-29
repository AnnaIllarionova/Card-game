import { renderResultPage } from "./result-page";
import { interval } from "./render-game-field";

export let gameTime;
export function useMainGameLogic({
    flippedCards,
    cardsInGame,
    doubleCardArray,
    gamePage,
}) {
    let gameWon = false;
    flippedCards.forEach((card) => {
        card.classList.add("flipped");
    });

    setTimeout(() => {
        flippedCards.forEach((card) => {
            card.innerHTML =
                '<img class="cards__shirt" src="static/рубашка.png" alt="рубашка"/>';
            card.classList.remove("flipped");
        });
    }, 5000);

    let firstCard = null;
    let secondCard = null;
    let firstCardRank = null;
    let firstCardSuit = null;
    let secondCardRank = null;
    let secondCardSuit = null;

    flippedCards.forEach((card) => {
        card.addEventListener("click", () => {
            const index = card.dataset.index;
            // в  <div class="generated-card" data-index="${i}"> вставляется точно такой же див
            card.innerHTML = cardsInGame[index];
            card.classList.add("flipped");

            if (firstCard === null) {
                firstCard = card;
                firstCardRank = doubleCardArray[index].rank;
                firstCardSuit = doubleCardArray[index].suit;
            } else if (secondCard === null) {
                secondCard = card;
                secondCardRank = doubleCardArray[index].rank;
                secondCardSuit = doubleCardArray[index].suit;
            }

            if (firstCard !== null && secondCard !== null) {
                if (
                    firstCardRank === secondCardRank &&
                    firstCardSuit === secondCardSuit
                ) {
                    firstCard.classList.add("generated-card__matched");
                    secondCard.classList.add("generated-card__matched");
                    firstCard = null;
                    secondCard = null;
                }
            }

            if (firstCard !== null && secondCard !== null) {
                if (
                    firstCardRank !== secondCardRank ||
                    firstCardSuit !== secondCardSuit
                ) {
                    clearInterval(interval);
                    gameWon = false;
                    setTimeout(() => {
                        renderResultPage({ gamePage, gameWon });
                    }, 500);
                }
            }
            if (
                document.querySelectorAll(".generated-card.flipped").length ===
                cardsInGame.length
            ) {
                clearInterval(interval);
                gameWon = true;
                setTimeout(() => {
                    renderResultPage({ gamePage, gameWon });
                }, 500);
            }
        });
    });
}
