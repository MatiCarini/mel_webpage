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

    if (scrollTop > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const nav = document.getElementById("header-nav");
  const navLinks = document.querySelectorAll("#header-nav a");

  // Función para alternar la visibilidad del menú
  function toggleMenu() {
    nav.classList.toggle("active");
  }

  // Evento para abrir/cerrar el menú cuando se hace clic en el botón
  hamburgerMenu.addEventListener("click", toggleMenu);

  // Evento para cerrar el menú cuando se hace clic en un link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
