document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('form-response');

  if (!name || !email || !message) {
    response.textContent = 'Please fill in all fields.';
    response.style.color = 'red';
    return;
  }

  // Simulate successful submission
  response.textContent = `Thank you, ${name}! We'll get back to you shortly.`;
  response.style.color = 'green';

  this.reset();
});
