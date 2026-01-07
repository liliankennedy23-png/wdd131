// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("2026").textContent = currentYear;

// Get last modified date
document.getElementById("1/7/2026 17:31:46").textContent =
  "Last Modified: " + document.lastModified;
