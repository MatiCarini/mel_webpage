const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 75) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const hamburguerMenu = document.getElementById("hamburger-menu");
const navItems = document.getElementById("header-nav");

hamburguerMenu.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
