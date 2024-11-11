document.addEventListener("DOMContentLoaded", () => {
  const cuisineSections = document.querySelectorAll(".cuisine-section");

  cuisineSections.forEach(section => {
    section.addEventListener("mouseover", () => {
      section.style.transform = "scale(1.05)";
      section.style.transition = "transform 0.2s ease";
    });
    section.addEventListener("mouseout", () => {
      section.style.transform = "scale(1)";
    });
  });
});
