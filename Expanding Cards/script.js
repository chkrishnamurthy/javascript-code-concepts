const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeClass();
    panel.classList.add("active");
  });
});

const removeClass = () => {
  panels.forEach((panel, index) => {
    panel.classList.remove("active");
  });
};
