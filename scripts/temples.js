const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");

  menuButton.textContent = isOpen ? "✖" : "☰";

  // FIX 3: Accessibility state update
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
