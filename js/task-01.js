const ulEl = document.querySelectorAll(".item");
console.log("Number of categories:", ulEl.length);
ulEl.forEach((element) => {
  const hEl = element.querySelector("h2");
  console.log("Category:", hEl.textContent);
  const liEl = element.querySelectorAll("li");
  console.log("Elements:", liEl.length);
});
