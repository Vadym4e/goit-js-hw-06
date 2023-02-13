const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("change", validationInput);
const dataLength = Number(inputEl.getAttribute("data-length"));

function validationInput() {
  console.log("length", inputEl.value.length);

  if (inputEl.value.length === dataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
