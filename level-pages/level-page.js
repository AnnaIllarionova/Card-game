import { renderMainPage, level } from "../index.js";

export const renderLevelPage = ({ gamePage }) => {
  const levelHtml = `
  <div class="playing-field">
    <div class="header">
      <div class="timer">
      <div class="timer__text">
      <p class="timer__text_min">min</p>
      <p class="timer__text_sek">sek</p>
      </div>
        <p class="timer__numbers">00.00</p>
      </div>
        <button class="difficulties-box__button_again" id="start-over-button">Начать заново</button>
    </div>
    <div class="render-cards"></div>
    <a class="back-link">Вернуться назад</a>
  </div>
  `;

  gamePage.innerHTML = levelHtml;

  const renderCardsElement = document.querySelector(".render-cards");
  const backLink = document.querySelector(".back-link");
  const startOverButton = document.getElementById("start-over-button");
  let isNotReversed = true;

  if (level === "easy") {
    const cardsForEasyLevel = `
    <div class="cards cards__easy">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
      <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    </div>
    `;
    renderCardsElement.innerHTML = cardsForEasyLevel;
  }

  if (level === "medium") {
    const cardsForMediumLevel = `
    <div class="cards cards__medium">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    </div>
    `;
    renderCardsElement.innerHTML = cardsForMediumLevel;
  }

  if (level === "hard") {
    const cardsForHardLevel = `
    <div class="cards">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
    </div>
    `;
    renderCardsElement.innerHTML = cardsForHardLevel;
  }

  startOverButton.addEventListener("click", () => {
    console.log(level);
    if (isNotReversed) {
      const levelCardsHtml = `
    <div class="playing-field">
    <div class="header">
      <div class="timer">
      <div class="timer__text">
      <p class="timer__text_min">min</p>
      <p class="timer__text_sek">sek</p>
      </div>
        <p class="timer__numbers">00.00</p>
      </div>
        <button class="difficulties-box__button_again" id="start-reverse-button">Перевернуть карты</button>
    </div>
    <div class="render-cards"></div>
    
  </div>
    `;
      gamePage.innerHTML = levelCardsHtml;
      isNotReversed = false;
      const renderCardsElement = document.querySelector(".render-cards");

      if (level === "easy") {
        const cardsForEasyLevelHtml = `
        <div class="cards cards__easy">
        <img class="cards__shirt" src="img/туз пики.png" alt="карта">
        <img class="cards__shirt" src="img/король пики.png" alt="карта">
        <img class="cards__shirt" src="img/дама пики.png" alt="карта">
        <img class="cards__shirt" src="img/валет пики.png" alt="карта">
        <img class="cards__shirt" src="img/туз черви.png" alt="карта">
        <img class="cards__shirt" src="img/король черви.png" alt="карта">
        <img class="cards__shirt" src="img/дама черви.png" alt="карта">
        <img class="cards__shirt" src="img/валет черви.png" alt="карта">
        <img class="cards__shirt" src="img/король бубны.png" alt="карта">
        <img class="cards__shirt" src="img/король бубны.png" alt="карта">
        <img class="cards__shirt" src="img/дама бубны.png" alt="карта">
        <img class="cards__shirt" src="img/валет бубны.png" alt="карта">
        <img class="cards__shirt" src="img/туз крести.png" alt="карта">
        <img class="cards__shirt" src="img/король крести.png" alt="карта">
        <img class="cards__shirt" src="img/дама крести.png" alt="карта">
        <img class="cards__shirt" src="img/валет крести.png" alt="карта">
        </div>
        `;
        renderCardsElement.innerHTML = cardsForEasyLevelHtml;
      }

      if (level === "medium") {
        const cardsForMediumLevelHtml = `
        <div class="cards cards__medium">
        <img class="cards__shirt" src="img/туз пики.png" alt="карта">
        <img class="cards__shirt" src="img/король пики.png" alt="карта">
        <img class="cards__shirt" src="img/дама пики.png" alt="карта">
        <img class="cards__shirt" src="img/валет пики.png" alt="карта">
        <img class="cards__shirt" src="img/10 пики.png" alt="карта">
        <img class="cards__shirt" src="img/9 пики.png" alt="карта">
        <img class="cards__shirt" src="img/туз черви.png" alt="карта">
        <img class="cards__shirt" src="img/король черви.png" alt="карта">
        <img class="cards__shirt" src="img/дама черви.png" alt="карта">
        <img class="cards__shirt" src="img/валет черви.png" alt="карта">
        <img class="cards__shirt" src="img/10 черви.png" alt="карта">
        <img class="cards__shirt" src="img/9 черви.png" alt="карта">
        <img class="cards__shirt" src="img/король бубны.png" alt="карта">
        <img class="cards__shirt" src="img/король бубны.png" alt="карта">
        <img class="cards__shirt" src="img/дама бубны.png" alt="карта">
        <img class="cards__shirt" src="img/валет бубны.png" alt="карта">
        <img class="cards__shirt" src="img/10 бубны.png" alt="карта">
        <img class="cards__shirt" src="img/9 бубны.png" alt="карта">
        <img class="cards__shirt" src="img/туз крести.png" alt="карта">
        <img class="cards__shirt" src="img/король крести.png" alt="карта">
        <img class="cards__shirt" src="img/дама крести.png" alt="карта">
        <img class="cards__shirt" src="img/валет крести.png" alt="карта">
        <img class="cards__shirt" src="img/10 крести.png" alt="карта">
        <img class="cards__shirt" src="img/9 крести.png" alt="карта">
        </div>
        `;
        renderCardsElement.innerHTML = cardsForMediumLevelHtml;
      }

      if (level === "hard") {
        const cardsForHardLevelHtml = `
        <div class="cards">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        <img class="cards__shirt" src="img/рубашка.png" alt="рубашка">
        </div>
        `;
        renderCardsElement.innerHTML = cardsForHardLevelHtml;
      }
    }
    const reverseButton = document.getElementById("start-reverse-button");
    reverseButton.addEventListener("click", () => {
      isNotReversed = true;
      renderLevelPage({ gamePage });
    });
  });

  backLink.addEventListener("click", () => {
    renderMainPage();
  });
};
