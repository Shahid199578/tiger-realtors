// Mobile Menu
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
mobileMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') navLinks.classList.remove('active'); });

// Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});

// Form -> WhatsApp
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;
  const msg = `Hi! I'm ${name}. I'm interested in ${service}. My phone: ${phone}. Message: ${message}`;
  window.open(`https://wa.me/+918743910094?text=${encodeURIComponent(msg)}`, '_blank');
});
