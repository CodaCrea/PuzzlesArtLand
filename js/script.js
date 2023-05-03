let nav = document.getElementById("nav_bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 91) {
    nav.style.top = "-80px";
    nav.style.transition = "0.8s";
  } else if (window.scrollY < 91) {
    nav.style.top = 0;
    nav.style.transition = "0.5s";
  }
  if (window.matchMedia("(max-width: 1240px)").matches) {
    nav.style.top = 0;
    nav.style.transition = 0;
  }
});

let burger = document.querySelector("#burger");
let navMenu = document.querySelector("#nav_bar");
let body = document.querySelector(".body");

burger.addEventListener("mousedown", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

body.addEventListener("mousedown", () => {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
});
