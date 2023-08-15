import { renderMainPage } from "../index.js";

export const renderMediumLevelPage = ({ gamePage }) => {
  const mediumLevelHtml = `
    <div class="difficulties-box">
    <p class="difficulties-box__text">Здесь будет страница среднего уровня игры</p>
    <a class="back-link">Вернуться назад</a>
    </div>
    `;
  gamePage.innerHTML = mediumLevelHtml;

  const backLink = document.querySelector(".back-link");

  backLink.addEventListener("click", () => {
    renderMainPage();
    //window.location.replace("http://127.0.0.1:5500/index.html");
  });
};
