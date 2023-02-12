const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("span");

inputEl.addEventListener("input", inputChange);

function inputChange(event) {
  if (event.currentTarget.value) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
}
