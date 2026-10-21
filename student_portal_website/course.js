const search = document.querySelector("#courseSearch");
const courses = document.querySelectorAll(".course-card");

search.addEventListener("input", function () {
    const keyword = search.value.toLowerCase();
    courses.forEach(function (course) {
        const match = course.textContent.toLowerCase().includes(keyword);
        course.style.display = match ? "" : "none";
    });
});
