// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});