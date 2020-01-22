import "./style/main.scss";

const menuElement = document.getElementById("menu");
const hamburgerElement = document.getElementById("hamburger");

hamburgerElement.addEventListener("click", () => {
  menuElement.classList.toggle("menu--open");
});
