import { renderMainPage } from "../index.js";

export const renderEasyLevelPage = ({ gamePage }) => {
  const easyLevelHtml = `
    <div class="difficulties-box">
    <p class="difficulties-box__text">Здесь будет страница лёгкого уровня игры</p>
    <a class="back-link">Вернуться назад</a>
    </div>
    `;
  gamePage.innerHTML = easyLevelHtml;

  const backLink = document.querySelector(".back-link");

  backLink.addEventListener("click", () => {
    renderMainPage();
    // window.location.replace("http://127.0.0.1:5500/index.html");
  });
};
