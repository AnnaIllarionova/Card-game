import { renderMainPage } from "../index.js";

export const renderEasyLevelPage = ({ gamePage }) => {
  const easyLevelHtml = `
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
    <a class="back-link">Вернуться назад</a>
  </div>
  `;

  gamePage.innerHTML = easyLevelHtml;

  const backLink = document.querySelector(".back-link");
  const startOverButton = document.getElementById("start-over-button");
  let isNotReversed = true;

  startOverButton.addEventListener("click", () => {
    if (isNotReversed) {
      const easyLevelCardsHtml = `
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
  </div>
    `;
      gamePage.innerHTML = easyLevelCardsHtml;
      isNotReversed = false;
    }
    const reverseButton = document.getElementById("start-reverse-button");
    reverseButton.addEventListener("click", () => {
      isNotReversed = true;
      renderEasyLevelPage({ gamePage });
    });
  });

  backLink.addEventListener("click", () => {
    renderMainPage();
  });
};
