const activities = [
  { name: "Glacier Hiking", difficulty: "Moderate" },
  { name: "Dog Sledding", difficulty: "Easy" },
  { name: "Kayaking", difficulty: "Moderate" }
];

function renderActivities() {
  const list = document.getElementById("activity-list");
  if (!list) return;

  list.innerHTML = activities
    .map(activity => `<li>${activity.name} - ${activity.difficulty}</li>`)
    .join("");
}

function saveReview(name, experience) {
  const review = { name, experience };
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function renderReviews() {
  const container = document.getElementById("reviews");
  if (!container) return;

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  container.innerHTML = reviews
    .map(r => `<p><strong>${r.name}</strong>: ${r.experience}</p>`)
    .join("");
}

function handleForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const experience = document.getElementById("experience").value.trim();

  if (!name || !experience) {
    alert("Please complete all fields.");
    return;
  }

  saveReview(name, experience);
  renderReviews();
  event.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  renderActivities();
  renderReviews();

  const form = document.getElementById("review-form");
  if (form) {
    form.addEventListener("submit", handleForm);
  }
});
