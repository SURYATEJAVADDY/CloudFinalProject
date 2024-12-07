import { validateEmail, validatePassword, validateUsername } from './validators.js';

export function setupForm(formElement) {
  const errorMessages = {
    username: 'Username must be at least 3 characters long',
    password: 'Password must be at least 8 characters long',
    email: 'Please enter a valid email address'
  };

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = formElement.username.value;
    const password = formElement.password.value;
    const email = formElement.email.value;

    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    if (!validateUsername(username)) {
      document.getElementById('username-error').textContent = errorMessages.username;
      isValid = false;
    }

    if (!validatePassword(password)) {
      document.getElementById('password-error').textContent = errorMessages.password;
      isValid = false;
    }

    if (!validateEmail(email)) {
      document.getElementById('email-error').textContent = errorMessages.email;
      isValid = false;
    }

    if (isValid) {
      console.log('Form submitted:', { username, email });
      formElement.reset();
    }
  });
}