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