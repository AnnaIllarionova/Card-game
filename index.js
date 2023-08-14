export const gamePage = document.querySelector(".difficulties.center");

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
  const easyLevelButton = document.getElementById("easy-level");
  const mediumLevelButton = document.getElementById("medium-level");
  const hardLevelButton = document.getElementById("hard-level");

  for (const levelButton of levelButtons) {
    levelButton.addEventListener("click", () => {
      levelButton.classList.toggle("difficulties-level__button-active");
      const isActive = levelButton.classList.contains(
        "difficulties-level__button-active"
      );
      //console.log(isActive);

      for (const btn of levelButtons) {
        if (btn !== levelButton) {
          btn.disabled = isActive;
        }
      }

      startButton.addEventListener("click", () => {
        if (easyLevelButton === levelButton) {
          window.location.href = "http://127.0.0.1:5500/easy-level.html";
        }

        if (mediumLevelButton === levelButton) {
          window.location.href = "http://127.0.0.1:5500/medium-level.html";
        }
        if (hardLevelButton === levelButton) {
          window.location.href = "http://127.0.0.1:5500/hard-level.html";
        }
      });
    });
  }
}

renderMainPage();
