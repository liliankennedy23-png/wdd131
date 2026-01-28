// Optional JS for simple form validation or localStorage
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    // Example: Store GitHub username in localStorage
    const username = document.getElementById('username').value;
    localStorage.setItem('githubUsername', username);
    // The form will still submit normally
  });

  // Pre-fill username from localStorage if exists
  const savedUsername = localStorage.getItem('githubUsername');
  if (savedUsername) {
    document.getElementById('username').value = savedUsername;
  }
}
