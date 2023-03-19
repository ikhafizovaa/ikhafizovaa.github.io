// Get the elements you want to interact with
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Add event listeners to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the ID of the corresponding section
    const targetId = link.getAttribute('href');

    // Scroll to the target section
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight the current section in the navigation
document.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = `#${section.id}`;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentSection) {
      link.classList.add('active');
    }
  });
});

// Show a confirmation message when the contact form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you for your message!');
});
