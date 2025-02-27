/***************************************************
  1. DYNAMIC COLOR CHANGE (HERO SECTION)
****************************************************/
const colorPalette = [
  'rgba(49, 0, 85, 0.6)',
  'rgba(60, 6, 99, 0.6)',
  'rgba(74, 10, 119, 0.6)',
  'rgba(90, 16, 143, 0.6)',
  'rgba(104, 24, 165, 0.6)',
  'rgba(139, 47, 201, 0.6)',
  'rgba(171, 81, 227, 0.6)',
  'rgba(189, 104, 238, 0.6)',
  'rgba(210, 131, 255, 0.6)',
  'rgba(220, 151, 255, 0.6)'
];

let currentColorIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const heroOverlay = document.querySelector('.hero-overlay');
  const colorTrigger = document.getElementById('colorTrigger');

  // Hero Overlay Color Cycling
  if (colorTrigger) {
    colorTrigger.addEventListener('click', (event) => {
      event.preventDefault();
      currentColorIndex = (currentColorIndex + 1) % colorPalette.length;
      heroOverlay.style.backgroundColor = colorPalette[currentColorIndex];
    });
  }



document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptCookies = document.getElementById("accept-cookies");
  const declineCookies = document.getElementById("decline-cookies");

  // Check if cookies have already been accepted or declined
  if (!localStorage.getItem("cookieConsent")) {
    cookiePopup.classList.remove("hidden");
  }

  // Accept Cookies
  acceptCookies.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    cookiePopup.classList.add("hidden");
  });

  // Decline Cookies
  declineCookies.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    cookiePopup.classList.add("hidden");
  });
});

  // Additional JS can go here if needed
});


  // Add smooth transition effects on scrolling
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Initial check
});

// Slow down scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
