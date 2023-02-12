const addListenerDecrementEl = document.querySelector(
  'button[data-action = "decrement"]'
);
const addListenerIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("span");

addListenerDecrementEl.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent) - 1;
});

addListenerIncrementEl.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent) + 1;
});
