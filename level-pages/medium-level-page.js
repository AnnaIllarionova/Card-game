const gamePage = document.querySelector(".difficulties.center");

const renderEasyLevelPage = () => {
  const easyLevelHtml = `
    <div class="difficulties-box">
    <p class="difficulties-box__text">Здесь будет страница среднего уровня игры</p>
    <a class="back-link">Вернуться назад</a>
    </div>
    `;
  gamePage.innerHTML = easyLevelHtml;

  const backLink = document.querySelector(".back-link");

  backLink.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html";
  });
};
renderEasyLevelPage();
