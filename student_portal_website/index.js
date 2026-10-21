const hour = new Date().getHours();
let text = "Good evening";
if (hour < 12) text = "Good morning";
else if (hour < 17) text = "Good afternoon";

document.querySelector("#greeting").textContent = text + ", Student!";
