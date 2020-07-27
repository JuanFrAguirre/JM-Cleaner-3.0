const menuBtn = document.querySelector(".boton-menu");
const buttons = document.querySelector(".botones");
const titleHeight = document.querySelector(".barra").clientHeight;
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    buttons.classList.remove("side");
    menuOpen = true;
  } else if (menuOpen) {
    menuBtn.classList.remove("open");
    buttons.classList.add("side");
    menuOpen = false;
  }
});

buttons.style.top = titleHeight;
