import { renderEasyLevelPage } from "./level-pages/easy-level-page.js";
import { renderHardLevelPage } from "./level-pages/hard-level-page.js";
import { renderMediumLevelPage } from "./level-pages/medium-level-page.js";

export const gamePage = document.querySelector(".difficulties.center");
export let level = "";

export function renderMainPage() {
  const mainPage = `
    <div class="difficulties-box">
        <p class="difficulties-box__text">Выбери сложность</p>
        <div class="difficulties-level">
          <button class="difficulties-level__button" id="easy-level">1</button>
          <button class="difficulties-level__button" id="medium-level">2</button>
          <button class="difficulties-level__button" id="hard-level">3</button>
        </div>
        <button class="difficulties-box__button_start">Старт</button>
      </div>
    `;

  gamePage.innerHTML = mainPage;

  const startButton = document.querySelector(".difficulties-box__button_start");
  const levelButtons = document.querySelectorAll(".difficulties-level__button");

  for (const levelButton of levelButtons) {
    levelButton.addEventListener("click", () => {
      levelButton.classList.toggle("difficulties-level__button-active");
      const isActive = levelButton.classList.contains(
        "difficulties-level__button-active"
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
          renderEasyLevelPage({ gamePage });
        }

        if (levelButton.id === "medium-level") {
          level = "medium";
          renderMediumLevelPage({ gamePage });
        }
        if (levelButton.id === "hard-level") {
          level = "hard";
          renderHardLevelPage({ gamePage });
        }
      });
    });
  }
}

renderMainPage();
