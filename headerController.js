const getScrollPosition = () => {
  return document.documentElement.scrollTop || document.body.scrollTop || 0;
};

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.documentElement.scrollTop, document.body.scrollTop);
  document.addEventListener("scroll", () => console.log("Scrolling..."), true);
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    let scrollTop = getScrollPosition();
    console.log(scrollTop); // Verifica si esto se actualiza en móvil

    if (scrollTop > 75) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

const hamburguerMenu = document.getElementById("hamburger-menu");
const navItems = document.getElementById("header-nav");

hamburguerMenu.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
