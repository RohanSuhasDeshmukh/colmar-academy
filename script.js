document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav ul");
  const toggleBtn = document.createElement("div");

  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = "&#9776;"; // ☰ icon
  document.querySelector(".header").appendChild(toggleBtn);

  // Toggle mobile menu
  toggleBtn.addEventListener("click", () => {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
});
