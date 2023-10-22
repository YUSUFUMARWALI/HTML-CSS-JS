const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Send the username and password to the server.
});