const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;
  return liEl;
});

const listEl = document.querySelector("ul");

listEl.append(...elements);
