// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");

mobileToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header background on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Hero slider dots functionality
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    dots.forEach((d) => d.classList.remove("active"));
    this.classList.add("active");
  });
});

// Form submission
const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".service-item, .product-category, .about-text, .details-text"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Scroll to top button functionality
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
scrollBtn.addEventListener("click", function () {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
