const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your enquiry has been received.");
    form.reset();
});
