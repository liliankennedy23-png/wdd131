const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: 1893,
    area: 253015,
    image: "images/Salt-Lake-Temple.webp"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: 2017,
    area: 44175,
    image: "images/Paris-France-Temple.webp"
  },
  {
    name: "Seattle Washington Temple",
    location: "Seattle, Washington",
    dedicated: 1980,
    area: 110000,
    image: "images/Seattle-Washington-Temple.webp"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 40000,
    image: "images/Rome-Italy-Temple.webp"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: 1919,
    area: 42100,
    image: "images/Laie-Hawaii-Temple.webp"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: 1980,
    area: 52700,
    image: "images/Tokyo-Japan-Temple.webp"
  },
  {
    name: "London England Temple",
    location: "London, England",
    dedicated: 1958,
    area: 42652,
    image: "images/London-England-Temple.webp"
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California",
    dedicated: 1993,
    area: 72000,
    image: "images/San-Diego-Temple.webp"
  },
  {
    name: "Columbia South Carolina Temple",
    location: "Columbia, South Carolina",
    dedicated: 1999,
    area: 10700,
    image: "images/South-Carolina-Temple.webp"
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: 2016,
    area: 85000,
    image: "images/Provo-City-Center-Temple.webp"
  }
];

const container = document.querySelector("#temple-cards");
const navLinks = document.querySelectorAll("nav a");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.image}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    navLinks.forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;
    let result = temples;

    if (filter === "old") {
      result = temples.filter(t => t.dedicated < 1900);
    } else if (filter === "new") {
      result = temples.filter(t => t.dedicated > 2000);
    } else if (filter === "large") {
      result = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
      result = temples.filter(t => t.area < 10000);
    }

    displayTemples(result);
  });
});

/* FOOTER */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* INITIAL LOAD */
displayTemples(temples);
