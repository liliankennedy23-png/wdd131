document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reviewForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            alert(`Thank you, ${name}! Your review has been submitted.`);

            form.reset();
        });
    }
});
