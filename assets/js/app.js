const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navlinks = document.querySelector(".nav-links");
  const navlink = document.querySelectorAll(".nav-links li");
  const width = screen.width;

  // Navbar Scroll
  window.onscroll = () => {
    if (window.scrollY > 100) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  };

  burger.addEventListener("click", () => {
    // Toggle nav
    navlinks.classList.toggle("nav-active");
    // Animate links
    navlink.forEach((link, index) => {
      link.classList.toggle("nav-links-fade-out");
      if (link.style.animation) {
        link.style.removeProperty("animation");
      } else {
        link.style.animation = `navLinkFadeIn 0.5s ease both ${index / 7 + 0.4}s`;
      }
    });
    // Animate burger
    burger.classList.toggle("toggle");

  });
  
  // Close navlink bar when link clicked
  if (width <= 768) {
    navlink.forEach((link) => {
      link.addEventListener("click", () => {
        navlinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        navlink.forEach((link, index) => {
          link.classList.toggle("nav-links-fade-out");
          if (link.style.animation) {
            link.style.removeProperty("animation");
          } else {
            link.style.animation = `navLinkFadeIn 0.5s ease both ${index / 7 + 0.4}s`;
          }
        });
      });
    });
  }
};
navSlide();
