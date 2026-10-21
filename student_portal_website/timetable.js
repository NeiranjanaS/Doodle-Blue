const day = new Date().getDay();

if (day >= 1 && day <= 5) {
    document.querySelectorAll(".timetable-table tbody tr").forEach(function (row) {
        if (row.cells.length > 2) {          
            row.cells[day].classList.add("today-cell");
        }
    });
}
