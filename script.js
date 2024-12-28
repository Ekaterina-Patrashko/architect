//animate on scroll

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const container = entry.target.querySelector(".container");
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add("active");
        }, delay);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const elements = document.querySelectorAll(".animate-on-scroll");
elements.forEach((el) => observer.observe(el));

//burger menu

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const menuLinks = document.querySelector(".menu-links");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    menuLinks.classList.toggle("open");
  });

  menuLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      burgerMenu.classList.remove("open");
      menuLinks.classList.remove("open");
    }
  });
});
