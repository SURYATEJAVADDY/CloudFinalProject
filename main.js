import { setupForm } from './src/js/formHandler.js';

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  setupForm(loginForm);
});