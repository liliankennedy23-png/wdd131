const yearSpan = document.getElementById("currentyear");
const modifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (modifiedSpan) {
  modifiedSpan.textContent = "Last Modified: " + document.lastModified;
}
