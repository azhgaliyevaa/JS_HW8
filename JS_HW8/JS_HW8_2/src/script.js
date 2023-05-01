const flexContainer = document.querySelector(".container");

const navMenu = document.querySelector(".modal");

const xCloseIcon = document.querySelector(".close-icon");

const burgerMenu = document.querySelector(".burger-menu");

const descrFlex = document.querySelector(".description");

const list = document.querySelector(".list");

burgerMenu.addEventListener("click", toggleBurgerMenu);

xCloseIcon.addEventListener("click", closeBurgerMenu);

function toggleBurgerMenu() {
  navMenu.classList.toggle("modal-active");
  list.classList.toggle("list");
}

function closeBurgerMenu() {
  navMenu.classList.remove("modal-active");
  list.classList.remove("list");
}
