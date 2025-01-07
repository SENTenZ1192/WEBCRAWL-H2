// Add background color to header on scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollY = window.scrollY; // Current scroll position
    const fadePoint = 300; // Adjust this value to control fade speed
  
    // Calculate new opacity value
    const opacity = Math.max(1 - scrollY / fadePoint, 0);
    hero.style.opacity = opacity;
  });
  
  
  // Smooth scroll for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

// Add any animations or lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.council-card');
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });
  });
  
