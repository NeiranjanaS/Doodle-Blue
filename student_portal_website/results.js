const totals = document.querySelectorAll(".data-table tbody tr td:nth-child(5)");
let sum = 0;

totals.forEach(function (cell) {
    sum += Number(cell.textContent);
});

const average = (sum / totals.length).toFixed(1);
const line = document.createElement("p");
line.className = "result-average";
line.textContent = "Average score: " + average + "%";
document.querySelector(".table-note").before(line);
