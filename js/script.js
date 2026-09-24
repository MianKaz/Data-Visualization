// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Page content
const pages = {
  home: "<h1>Welcome to Appliance Energy Consumption</h1><p>Placeholder content about energy use in Australia.</p>",
  televisions: "<h1>Television Energy Use</h1><p>Placeholder content about TV energy consumption in the Australian market.</p>",
  about: "<h1>About Us</h1><p>We provide insights into appliance energy consumption trends.</p>"
};

// Load page function
function loadPage(page) {
  document.getElementById("content").innerHTML = pages[page];

  // Update active link
  document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
  event.target.classList.add("active");
}

// Default page
loadPage("home");

// Logo click → go home
document.getElementById("logo").addEventListener("click", () => loadPage("home"));
