import "./style/main.scss";

const menuElement = document.querySelector("#menu");
const hamburgerElement = document.querySelector("#hamburger");

hamburgerElement.addEventListener("click", () => {
  menuElement.classList.toggle("menu--open");
});

const form = document.querySelector(".form")

form.addEventListener("submit", e => {
  e.preventDefault()
  alert("Not connected yet")
})