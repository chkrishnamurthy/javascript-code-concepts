const expandsBtn = document.querySelector("#btn");
const search = document.querySelector(".search");

expandsBtn.addEventListener("click", () => {
  search.classList.add("active");
});
