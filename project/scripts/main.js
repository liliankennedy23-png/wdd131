// Sample data for destinations
const destinations = [
  { name: "Denali National Park", type: "National Park", season: "summer" },
  { name: "Anchorage", type: "City", season: "all" },
  { name: "Juneau", type: "Capital", season: "all" }
];

// Sample data for activities
const activities = [
  { name: "Hiking", category: "hiking" },
  { name: "Wildlife Viewing", category: "wildlife" },
  { name: "Glacier Tours", category: "glaciers" }
];

// Populate featured destinations on homepage
const featuredContainer = document.getElementById("featured-destinations");
if (featuredContainer) {
  destinations.forEach(dest => {
    featuredContainer.innerHTML += `<div class="destination-card">
      <h3>${dest.name}</h3>
      <p>Type: ${dest.type}</p>
      <p>Best Season: ${dest.season}</p>
    </div>`;
  });
}

// Populate destinations page
const destinationsList = document.getElementById("destinations-list");
if (destinationsList) {
  destinations.forEach(dest => {
    destinationsList.innerHTML += `<div class="destination-card">
      <h3>${dest.name}</h3>
      <p>Type: ${dest.type}</p>
      <p>Best Season: ${dest.season}</p>
    </div>`;
  });
}

// Populate activities page and filter
const activitiesList = document.getElementById("activities-list");
const activityFilter = document.getElementById("activity-filter");

function renderActivities(filter) {
  if (!activitiesList) return;
  activitiesList.innerHTML = "";
  const filtered = filter === "all" ? activities : activities.filter(act => act.category === filter);
  filtered.forEach(act => {
    activitiesList.innerHTML += `<div class="activity-card">
      <h3>${act.name}</h3>
      <p>Category: ${act.category}</p>
    </div>`;
  });
}

if (activitiesList) {
  renderActivities("all");
}

if (activityFilter) {
  activityFilter.addEventListener("change", (e) => {
    renderActivities(e.target.value);
    localStorage.setItem("lastFilter", e.target.value);
  });

  // Load last filter from localStorage
  const lastFilter = localStorage.getItem("lastFilter");
  if (lastFilter) {
    activityFilter.value = lastFilter;
    renderActivities(lastFilter);
  }
}
