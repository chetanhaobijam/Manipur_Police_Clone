console.log("Website script Ready!");

// Menu Toggle Script
const menu = document.querySelector("#menu-title");
const navItems = document.querySelector("#nav-items");

menu.addEventListener("click", () => {
  navItems.classList.toggle("show");
  menu.classList.toggle("dark-menu")
})