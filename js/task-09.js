const bodyEl = document.querySelector("body");
const colorName = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
});
