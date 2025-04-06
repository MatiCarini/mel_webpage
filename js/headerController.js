const getScrollPosition = () => {
  return document.documentElement.scrollTop || document.body.scrollTop || 0;
};

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.documentElement.scrollTop, document.body.scrollTop);
  document.addEventListener("scroll", () => true);
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    let scrollTop = getScrollPosition();

    if (scrollTop > 75) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navlinks = document.querySelectorAll("#navbar ul li a");
  // Función para alternar la visibilidad del menú
  function toggleMenu() {
    if (!navbar.classList.contains("active")) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }

  // Evento para abrir/cerrar el menú cuando se hace clic en el botón
  menuToggle.addEventListener("click", toggleMenu);

  // Evento para cerrar el menú cuando se hace clic en un link
  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      }
    });
  });
});
