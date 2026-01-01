const body = document.body;

if (localStorage.getItem("darkMode") === "on") {
  body.classList.add("dark-mode");
}

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    body.classList.contains("dark-mode") ? "on" : "off"
  );
}
