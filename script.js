// Greeting message based on time of day
function displayGreeting() {
  const greetingElem = document.getElementById('greeting');
  const hour = new Date().getHours();
  let greetingText = 'Welcome!';

  if (hour < 12) {
    greetingText = 'Good Morning!';
  } else if (hour < 18) {
    greetingText = 'Good Afternoon!';
  } else {
    greetingText = 'Good Evening!';
  }
  if(greetingElem) greetingElem.textContent = greetingText;
}

// Theme toggle: light/dark mode
function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector('.theme-toggle');
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    btn.textContent = 'Light Theme';
  } else {
    btn.textContent = 'Dark Theme';
  }
}

// Optional: Set initial button text on page load
window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btn = document.querySelector('.theme-toggle');
  if (body.classList.contains('dark-theme')) {
    btn.textContent = 'Light Theme';
  } else {
    btn.textContent = 'Dark Theme';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
});


// On page load, load theme preference
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

// Toggle project details visibility
function toggleDetails(button) {
  const details = button.nextElementSibling;
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    button.textContent = 'Hide Details';
  } else {
    details.classList.add('hidden');
    button.textContent = 'Show Details';
  }
}

// Contact form validation with regex
function validateContactForm() {
  const form = document.getElementById('contactForm');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/; // basic international phone validation

  if (name === '') {
    alert('Please enter your name.');
    form.name.focus();
    return false;
  }
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    form.email.focus();
    return false;
  }
  if (phone !== '' && !phoneRegex.test(phone)) {
    alert('Please enter a valid phone number or leave it blank.');
    form.phone.focus();
    return false;
  }
  if (message === '') {
    alert('Please enter your message.');
    form.message.focus();
    return false;
  }
  alert('Thank you for contacting me! I will get back to you soon.');
  form.reset();
  return false; // prevent actual submit for demo
}

// Survey form validation
function validateSurveyForm() {
  const form = document.getElementById('surveyForm');
  const find = form.find.value;
  const topics = form.querySelectorAll('input[name="topics"]:checked');

  if (!find) {
    alert('Please select how you found this portfolio.');
    return false;
  }
  if (topics.length === 0) {
    alert('Please select at least one topic of interest.');
    return false;
  }
  alert('Thank you for your feedback!');
  form.reset();
  return false; // prevent actual submit for demo
}
