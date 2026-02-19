document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    // Array to store reviews
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Function 1: Display Reviews
    function displayReviews() {
        if (!reviewList) return;

        reviewList.innerHTML = "";

        reviews.forEach((review, index) => {
            reviewList.innerHTML += `
                <div class="card">
                    <h3>${review.name}</h3>
                    <p><strong>Destination:</strong> ${review.destination}</p>
                    <p>${review.comments}</p>
                </div>
            `;
        });
    }

    // Function 2: Save Review
    function saveReview(review) {
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    // Conditional branching example
    if (reviews.length > 0) {
        displayReviews();
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const destination = document.getElementById("destination").value;
            const comments = document.getElementById("comments").value.trim();

            // Conditional branching
            if (name === "" || destination === "" || comments === "") {
                alert("Please complete all fields.");
                return;
            }

            // Object
            const newReview = {
                name,
                destination,
                comments
            };

            saveReview(newReview);
            displayReviews();

            form.reset();
        });
    }

});
