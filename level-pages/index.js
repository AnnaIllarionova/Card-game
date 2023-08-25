import { renderLevelPage } from "./level-page.js";
import "./style.css";

export const gamePage = document.querySelector(".difficulties.center");
export let level = "";

export function renderMainPage() {
    const mainPage = `
    <div class="level">
        <p class="level__text">Выбери сложность</p>
        <div class="choice">
          <button class="choice__button" id="easy-level">1</button>
          <button class="choice__button" id="medium-level">2</button>
          <button class="choice__button" id="hard-level">3</button>
        </div>
        <button class="level__button_start">Старт</button>
      </div>
    `;

    gamePage.innerHTML = mainPage;

    const startButton = document.querySelector(".level__button_start");
    const levelButtons = document.querySelectorAll(".choice__button");

    for (const levelButton of levelButtons) {
        levelButton.addEventListener("click", () => {
            levelButton.classList.toggle("choice__button-active");
            const isActive = levelButton.classList.contains(
                "choice__button-active",
            );
            console.log(isActive);

            for (const btn of levelButtons) {
                if (btn !== levelButton) {
                    btn.disabled = isActive;
                }
            }

            startButton.addEventListener("click", () => {
                if (levelButton.id === "easy-level") {
                    //console.log(levelButton.id);
                    level = "easy";
                    renderLevelPage({ gamePage });
                }

                if (levelButton.id === "medium-level") {
                    level = "medium";
                    renderLevelPage({ gamePage });
                }
                if (levelButton.id === "hard-level") {
                    level = "hard";
                    renderLevelPage({ gamePage });
                }
            });
        });
    }
}

renderMainPage();
