// script.js

// Toggle navigation menu on mobile
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav ul");
  const toggleBtn = document.createElement("div");

  // Create hamburger button
  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = "&#9776;"; // ☰ icon
  document.querySelector(".header").appendChild(toggleBtn);

  // Toggle nav menu on click
  toggleBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  // Optional: Smooth scroll for links
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
