const hour = new Date().getHours();
let greeting = "Good evening";

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 17) {
  greeting = "Good afternoon";
}

document.querySelector("#greeting").textContent = `${greeting}, Student!`;
