// Adding 'visible' class to sections when they come into view
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add("visible");
      }
    });
  });
  