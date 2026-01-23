// Temple Data Array
const temples = [
    { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicated: 1893, area: 253000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/salt-lake-temple.jpg" },
    { name: "Laie Hawaii Temple", location: "Laie, Hawaii", dedicated: 1919, area: 30000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/laie-hawaii-temple.jpg" },
    { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: 2019, area: 30000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/rome-italy-temple.jpg" },
    { name: "Tokyo Japan Temple", location: "Tokyo, Japan", dedicated: 1980, area: 52000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/tokyo-japan-temple.jpg" },
    { name: "Paris France Temple", location: "Paris, France", dedicated: 1985, area: 95000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/paris-france-temple.jpg" },
    { name: "Seattle Washington Temple", location: "Seattle, Washington", dedicated: 1990, area: 110000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/seattle-washington-temple.jpg" },
    { name: "Hong Kong China Temple", location: "Hong Kong, China", dedicated: 1996, area: 10000, imageUrl: "https://www.churchofjesuschristtemples.org/wp-content/uploads/2022/01/hong-kong-china-temple.jpg" }
];

// DOM References
const container = document.getElementById('temples-container');
const filterButtons = document.querySelectorAll('nav button');
const searchBar = document.getElementById('searchBar');
const sortSelect = document.getElementById('sortSelect');

let displayedTemples = [...temples]; // Current displayed temples

// Create temple cards
function displayTemples(templeArray) {
    container.innerHTML = '';
    templeArray.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card fade-in';
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            <div class="temple-info">
                <h2>${temple.name}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initial display
displayTemples(displayedTemples);

// Filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        let filtered = [];
        switch(filter) {
            case 'old': filtered = temples.filter(t => t.dedicated < 1900); break;
            case 'new': filtered = temples.filter(t => t.dedicated > 2000); break;
            case 'large': filtered = temples.filter(t => t.area > 90000); break;
            case 'small': filtered = temples.filter(t => t.area < 10000); break;
            default: filtered = [...temples];
        }
        displayedTemples = filtered;
        applySearchAndSort();
    });
});

// Search functionality
searchBar.addEventListener('input', applySearchAndSort);

function applySearchAndSort() {
    let filtered = displayedTemples.filter(t => t.name.toLowerCase().includes(searchBar.value.toLowerCase()));

    // Sorting
    switch(sortSelect.value) {
        case 'year-asc': filtered.sort((a,b) => a.dedicated - b.dedicated); break;
        case 'year-desc': filtered.sort((a,b) => b.dedicated - a.dedicated); break;
        case 'area-asc': filtered.sort((a,b) => a.area - b.area); break;
        case 'area-desc': filtered.sort((a,b) => b.area - a.area); break;
    }

    // Animate fade out/in
    const cards = container.querySelectorAll('.temple-card');
    cards.forEach(card => card.classList.add('fade-out'));
    setTimeout(() => displayTemples(filtered), 200);
}

// Sort select
sortSelect.addEventListener('change', applySearchAndSort);

// Footer date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
