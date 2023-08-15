import { renderMainPage } from "../index.js";

export const renderHardLevelPage = ({ gamePage }) => {
  const hardLevelHtml = `
    <div class="difficulties-box">
    <p class="difficulties-box__text">Здесь будет страница сложного уровня игры</p>
    <a class="back-link">Вернуться назад</a>
    </div>
    `;
  gamePage.innerHTML = hardLevelHtml;
  console.log(window.location.href);

  const backLink = document.querySelector(".back-link");

  backLink.addEventListener("click", () => {
    renderMainPage();
    //window.location.replace("http://127.0.0.1:5500/index.html");
  });
};
